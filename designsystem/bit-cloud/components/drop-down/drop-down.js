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
    itemLinkStyle,
    itemOptionWrapperStyle,
    applyFiltersBoxStyle,
} from './drop-down.css.js';
import { FormCheckbox } from '@konsumentverket-sverige/designsystem.form-checkbox';
import { FormRadiobutton } from '@konsumentverket-sverige/designsystem.form-radiobutton';
import {
  ChevronRight,
  useOnClickOutside
} from '@konsumentverket-sverige/designsystem.utils';
import { Button } from "@konsumentverket-sverige/designsystem.button";
import { Icon } from '@konsumentverket-sverige/designsystem.icon';

const CheckboxOption = ({ text, value, onChange, stateValue, disabled, id }) => (
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

const componentMap = {
  checkbox: CheckboxOption,
  radio: RadioOption,
  link: LinkOption,
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
}) => {
  const Component = componentMap[type];
  if (!Component) return null;

  const dropdownRef = useRef();

  const closeDropdown = () => setIsExpanded(false)
  useOnClickOutside(dropdownRef, () => closeDropdo0wn());

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' || event.key === 'Esc') {
        closeDropdown();
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

    if (type === "radio") {
      updatedValue = [newValue];
    } else {
      updatedValue = value.includes(newValue)
        ? value.filter(item => item !== newValue)
        : [...value, newValue];
    }

    onChange(updatedValue, event);
  };

  const handleBlur = (e) => {
    // Close dropdown when focusing outside of it
    if (!dropdownRef.current.contains(e.relatedTarget)) {
      closeDropdown();
    }
  }

  const handleApplyFilter = ()  => {
    onApplyFilter();
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
            onClick={() => setIsExpanded(!isExpanded)}
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
              css={itemsListStyle}
            >
              {data.map((item, index) => (
                <li key={index}>
                  <Component
                    id={`${id}-${index}`}
                    onChange={(checked) => handleOptionChange(item.value, checked)}
                    stateValue={value}
                    {...item}
                  />
                </li>
              ))}
            </ul>
          )}

          {showApplyButton && (
            <div css={applyFiltersBoxStyle} >
              <Button
                iconRight={
                  <Icon icon="MonoWhiteFilter1" />
                }
                text="Filtrera"
                onClick={handleApplyFilter}
              />
              <Button
                text="Rensa"
                iconLeft={
                  <Icon icon="DualBlueBin" />
                }
                linkStyleSmall={true}
                onClick={onResetFilter}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
