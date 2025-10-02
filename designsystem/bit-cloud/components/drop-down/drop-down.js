/** @jsx jsx */
import React, { useRef, useEffect } from 'react';
import { jsx } from '@emotion/core';
import {
    itemsWrapperStyle,
    itemsWrapperExpandedStyle,
    wrapperStyle,
    innerWrapperStyle,
    wrapperExpandedStyle,
    buttonStyle,
    chevronStyle,
    chevronExpandedStyle,
    itemsListStyle,
    maxHeightStyle,
    itemLinkStyle,
    itemOptionWrapperStyle,
    applyFiltersBoxStyle,
    resetFilterStyle,
  itemTextStyle
} from './drop-down.css.js';
import { FormCheckbox } from '@konsumentverket-sverige/designsystem.form-checkbox';
import { FormRadiobutton } from '@konsumentverket-sverige/designsystem.form-radiobutton';
import {
  ChevronRight,
  useOnClickOutside
} from '@konsumentverket-sverige/designsystem.utils';
import { Button } from "@konsumentverket-sverige/designsystem.button";
import { Icon } from '@konsumentverket-sverige/designsystem.icon';

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
)

const RadioOption = ({ text, value, id, onChange, stateValue, disabled }) => (
    <div css={itemOptionWrapperStyle}>
        <FormRadiobutton
            id={id}
            labelText={text}
            name={id}
            value={value}
            onChange={onChange}
            usePrimaryColor={true}
            checked={stateValue.includes(value)}
            disabled={disabled}
        />
    </div>
)

const LinkOption = ({ href, text }) => (
    <a className="noStyle" css={itemLinkStyle} href={href}>{text}</a>
)

const TextOption = ({ text, value, setValue, setIsExpanded }) => (
  <p className="noStyle" css={itemTextStyle} onClick={() => {
    setValue(value);
    setIsExpanded(false);
  }}>{text}</p>
)

const componentMap = {
  checkbox: CheckboxOption,
  radio: RadioOption,
  link: LinkOption,
  text: TextOption
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
}) => {
  const Component = componentMap[type];
  if (!Component) return null;

  const dropdownRef = useRef();



  const [focusedIndex, setFocusedIndex] = React.useState(-1);

  useEffect(() => {
    if (isExpanded && focusedIndex >= 0 && dropdownRef.current) {
      const options = dropdownRef.current.querySelectorAll('li[tabindex="0"]');
      if (options[focusedIndex]) {
        options[focusedIndex].focus();
      }
    }
  }, [focusedIndex, isExpanded]);



  const closeDropdown = () => setIsExpanded(false)
  useOnClickOutside(dropdownRef, () => closeDropdown());

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isExpanded) return;

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setFocusedIndex((prev) => {
          return (prev + 1) % data.length;
        });
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + data.length) % data.length);
      }
    }

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

    if (type === "radio") {
      updatedValue = [newValue];
    } else {
      updatedValue = value.includes(newValue)
        ? value.filter(item => item !== newValue)
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
  }

  const handleApplyFilter = () => {
    onApplyFilter();
    closeDropdown();
  }

  const handleResetFilter = () => {
    onResetFilter();
    closeDropdown();
  }

  return (
    <div
      data-comp="drop-down"
      css={[wrapperStyle, isExpanded && wrapperExpandedStyle]}
      ref={dropdownRef}
      tabIndex="-1"
      onBlur={handleBlur}
    >
      <div css={innerWrapperStyle} >
        {label && (
          <button
            css={buttonStyle}
            aria-controls={`dropdown-${id}`}
            aria-expanded={isExpanded}
            onClick={(e) => {
              e.preventDefault();
              setIsExpanded(!isExpanded);
            }}
          >
            {label}
            <ChevronRight
              aria-hidden="true"
              style={[chevronStyle, isExpanded && chevronExpandedStyle]}
            />
          </button>
        )}
        <div
          id={`dropdown-${id}`}
          css={[
            itemsWrapperStyle,
            isExpanded && itemsWrapperExpandedStyle]}
        >
          {data && (
            <ul
              css={[itemsListStyle,
                maxHeight && maxHeightStyle]}
            >
              {data.map((item, index) => (
                <li key={index} role="button" tabIndex={0} onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setValue(item.text);
                    setIsExpanded(false);
                  }
                }}>
                  <Component
                    id={`${id}-${index}`}
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
          )}

          {showApplyButton && (
            <div css={applyFiltersBoxStyle} >
              <Button
                secondaryButtonStyle={true}
                text="Använd filter"
                onClick={handleApplyFilter}
                iconLeft={<Icon icon="MonoBlueFilter1" />}
              />
              <button css={resetFilterStyle} onClick={handleResetFilter}>
                <Icon icon="DualBlueBin" />
                Rensa filter
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
