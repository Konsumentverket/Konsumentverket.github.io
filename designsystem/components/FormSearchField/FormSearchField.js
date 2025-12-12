/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useRef } from 'react';
import { searchWrapperStyle, searchFieldInputStyle, searchFieldButtonStyle, invertedBackgroundStyle, clearInputStyle,labelStyle, searchFieldInputWrapperStyles } from './FormSearchField.css';
import { Button } from '../Button/Button';
import { VisuallyHidden } from '../GlobalStyles/globalStyles';
import Clear from '../Icons/SystemIcons/Clear/Clear';

export const FormSearchField = React.forwardRef(({ className,
    icon,
    fieldtext,
    labeltext,
    showLabel = false,
    onClick,
    onClear,
    onChange,
    onBlur,
    invertedBackgroundColor = false,
    buttontext,
    style,
    disabled,
    type,
    inputtype,
    value,
    name,
    id,
    autocomplete,
    validationError,
    ...other }, ref) => {

    var styles = [searchWrapperStyle];
    style && styles.push(style)

    var searchFieldInputStyles = [searchFieldInputStyle];
    invertedBackgroundColor && searchFieldInputStyles.push(invertedBackgroundStyle);
    const inputRef = useRef();
    const ariaAttrs = {};
    Object.keys(other).filter(x => x.startsWith("aria-")).forEach(x => ariaAttrs[x] = other[x])

    return <>
        <label css={showLabel ? labelStyle : VisuallyHidden} htmlFor={id || name}>{labeltext || fieldtext}</label>
        {validationError}
        <div css={[styles]} className={className}  role="search"> 
            <div css={searchFieldInputWrapperStyles}>
                <input
                    {...other}
                    onChange={onChange}
                    onBlur={onBlur}
                    id={id || name}
                    ref={(el) => {
                        inputRef.current = el
                        return typeof ref === 'function' ? ref(el) : null
                    }}
                    type={inputtype || "search"}
                    placeholder={fieldtext}
                    disabled={disabled}
                    value={value}
                    name={name}
                    autoComplete={autocomplete}
                    css={[searchFieldInputStyles]} 
                />
            {inputRef && inputRef.current && inputRef.current.value.length > 0 && <a
                href="#"
                css={clearInputStyle}
                className="noStyle"
                onClick={e => {
                    e.preventDefault()
                    if (inputRef == null || inputRef.current == null) return
                    inputRef.current.value = ""
                    inputRef.current.dispatchEvent(new Event('change'))
                    if (onClear) {
                        onClear(e)
                    }
                }}>
                <Clear />
                
            </a>
            }
            </div>
            <Button
                style={searchFieldButtonStyle}
                disabled={disabled}
                onClick={onClick}
                iconLeft={icon}
                text={buttontext}
                //{...ariaAttrs}
            />
    </div></>

})
