/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useRef, useEffect } from 'react';
import {
  itemsWrapperStyle,
  itemsWrapperExpandedStyle,
  wrapperStyle,
  innerWrapperStyle,
  wrapperExpandedStyle,
  buttonStyle,
  buttonPlainStyle,
  buttonPanelTopStyle,
  plainContainerStyle,
  plainDropdownPanelStyle,
  chevronStyle,
  chevronExpandedStyle,
  itemsListStyle,
  maxHeightStyle,
  itemLinkStyle,
  itemOptionWrapperStyle,
  applyFiltersBoxStyle,
  resetFilterStyle,
  itemTextStyle,
} from './drop-down.css.js';
import { FormCheckbox } from '@konsumentverket-sverige/designsystem.form-checkbox';
import { FormRadiobutton } from '@konsumentverket-sverige/designsystem.form-radiobutton';
import { useOnClickOutside } from '@konsumentverket-sverige/designsystem.utils';
import { ChevronRight } from '@konsumentverket-sverige/designsystem.icons-system';
import { Button } from '@konsumentverket-sverige/designsystem.button';
import { SystemIcon } from '@konsumentverket-sverige/designsystem.icons-system';

const CheckboxOption = ({
  text,
  value,
  onChange,
  stateValue,
  disabled,
  id,
  stats,
}) => (
  <div css={itemOptionWrapperStyle}>
    <FormCheckbox
      id={id}
      labelText={text}
      name={id}
      value={value}
      onChange={(event) => onChange(event, value)}
      usePrimaryColor={true}
      checked={stateValue.includes(value)}
      disabled={disabled}
      stats={stats}
    />
  </div>
);

const RadioOption = ({ text, value, id, name, onChange, stateValue, disabled }) => (
  <div css={itemOptionWrapperStyle}>
    <FormRadiobutton
      id={id}
      labelText={text}
      name={name || id}
      value={value}
      onChange={onChange}
      usePrimaryColor={true}
      checked={stateValue.includes(value)}
      disabled={disabled}
    />
  </div>
);

const LinkOption = ({ href, text }) => (
  <a className="noStyle" css={itemLinkStyle} href={href}>
    {text}
  </a>
);

const TextOption = ({ text, value, setValue, setIsExpanded }) => (
  <p
    className="noStyle"
    css={itemTextStyle}
    onClick={() => {
      setValue(value);
      setIsExpanded(false);
    }}
  >
    {text}
  </p>
);

const componentMap = {
  checkbox: CheckboxOption,
  radio: RadioOption,
  link: LinkOption,
  text: TextOption,
};

export const Dropdown = ({
  label,
  id,
  data,
  type = 'link',
  onChange = () => {},
  value = [],
  isExpanded = false,
  setIsExpanded = () => {},
  onApplyFilter = () => {},
  onResetFilter = () => {},
  showApplyButton = true,
  setValue = () => {},
  maxHeight = false,
  closeOnChange = true,
  plain = false,
  panelWidth = null,
}) => {
  const Component = componentMap[type];
  if (!Component) return null;

  const dropdownRef = useRef();
  const panelRef = useRef(null);
  const [focusedIndex, setFocusedIndex] = React.useState(-1);

  useEffect(() => {
    if (isExpanded && focusedIndex >= 0 && dropdownRef.current) {
      const options = dropdownRef.current.querySelectorAll('ul li');
      if (options[focusedIndex]) {
        const focusable = options[focusedIndex].querySelector('input:not([disabled]), a, button:not([disabled])');
        if (focusable) focusable.focus();
        else options[focusedIndex].focus();
      }
    }
  }, [focusedIndex, isExpanded]);

  useEffect(() => {
    if (plain && isExpanded && panelRef.current) {
      const rect = panelRef.current.getBoundingClientRect();
      if (rect.right > window.innerWidth) {
        panelRef.current.style.left = 'auto';
        panelRef.current.style.right = '0';
      } else {
        panelRef.current.style.left = '';
        panelRef.current.style.right = '';
      }
    }
  }, [plain, isExpanded]);

  const closeDropdown = () => setIsExpanded(false);
  useOnClickOutside(dropdownRef, () => closeDropdown());

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isExpanded) return;
      if (!dropdownRef?.current?.contains(event.target)) return;

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setFocusedIndex((prev) => {
          return (prev + 1) % data.length;
        });
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + data.length) % data.length);
      }
    };

    if (isExpanded) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExpanded, value]);

  const handleOptionChange = (newValue, event) => {
    let updatedValue;

    if (type === 'radio') {
      updatedValue = [newValue];
    } else {
      updatedValue = value.includes(newValue)
        ? value.filter((item) => item !== newValue)
        : [...value, newValue];

      if (closeOnChange) setIsExpanded(false);
    }
    onChange(updatedValue, event);
  };

  const handleBlur = (e) => {
    // Close dropdown when focusing outside of it
    setTimeout(() => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(document.activeElement)
      ) {
        closeDropdown();
      }
    }, 0);
  };

  const handleApplyFilter = () => {
    onApplyFilter();
    closeDropdown();
  };

  const handleResetFilter = () => {
    onResetFilter();
    closeDropdown();
  };

  const optionList = data && (
    <ul css={[itemsListStyle, maxHeight && maxHeightStyle]}>
      {data.map((item, index) => (
        <li
          key={index}
          role="button"
          tabIndex={type === 'text' ? 0 : -1}
          onKeyDown={(e) => {
            if (!isExpanded) return;
            if (e.key === 'Enter') {
              if (type === 'radio' || type === 'checkbox') {
                handleOptionChange(item.value, e);
              } else {
                setValue(item.text);
                setIsExpanded(false);
              }
            }
          }}
        >
          <Component
            id={`${id}-${index}`}
            name={id}
            onChange={(checked) => handleOptionChange(item.value, checked)}
            stateValue={value}
            setValue={setValue}
            setIsExpanded={setIsExpanded}
            value={item.text}
            text={item.text}
            {...item}
          />
        </li>
      ))}
    </ul>
  );

  const applyFilterBlock = showApplyButton && (
    <div css={applyFiltersBoxStyle}>
      <Button
        secondaryButtonStyle={true}
        text="Använd filter"
        onClick={handleApplyFilter}
        iconLeft={<SystemIcon icon="MonoBlueFilter1" />}
      />
      <button css={resetFilterStyle} onClick={handleResetFilter}>
        <SystemIcon icon="DualBlueBin" />
        Rensa filter
      </button>
    </div>
  );

  const toggleButton = (extraCss, showChevron = true) => label && (
    <button
      css={extraCss}
      aria-controls={`dropdown-${id}`}
      aria-expanded={isExpanded}
      onClick={(e) => {
        e.preventDefault();
        if (e.clientX === 0 && e.clientY === 0) return;
        setIsExpanded(!isExpanded);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          if (!dropdownRef?.current?.contains(e.target)) return;
          e.preventDefault();
          setIsExpanded(!isExpanded);
        }
      }}
    >
      {label}
      {showChevron && (
        <ChevronRight
          aria-hidden="true"
          style={[chevronStyle, isExpanded && chevronExpandedStyle]}
        />
      )}
    </button>
  );

  if (plain) {
    return (
      <div
        data-comp="drop-down"
        css={plainContainerStyle}
        ref={dropdownRef}
        onBlur={handleBlur}
      >
        {toggleButton([buttonStyle, buttonPlainStyle], false)}
        {isExpanded && (
          <div id={`dropdown-${id}`} css={plainDropdownPanelStyle} style={panelWidth ? { minWidth: panelWidth } : undefined} ref={panelRef}>
            {toggleButton([buttonStyle, buttonPlainStyle, buttonPanelTopStyle])}
            {optionList}
            {applyFilterBlock}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      data-comp="drop-down"
      css={[wrapperStyle, isExpanded && wrapperExpandedStyle]}
      ref={dropdownRef}
      onBlur={handleBlur}
    >
      <div css={innerWrapperStyle}>
        {toggleButton(buttonStyle)}
        <div
          id={`dropdown-${id}`}
          css={[itemsWrapperStyle, isExpanded && itemsWrapperExpandedStyle]}
        >
          {optionList}
          {applyFilterBlock}
        </div>
      </div>
    </div>
  );
};
