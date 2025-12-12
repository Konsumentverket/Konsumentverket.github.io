/** @jsx jsx */
import { jsx } from '@emotion/core';
import {selectStyle,selectWrapperStyle, invalidStyle,labelStyle} from './Dropdown.css';
import { useState } from 'react';

export const Dropdown = ({label,id,onChange,validationError,children, ...other}) => {
    let [value,setValue] = useState(null)
    const invalid = validationError ? invalidStyle : null

    return (
    <div css={[selectWrapperStyle, invalid]}>
        { label && <label css={labelStyle} htmlFor={id}>{label}</label> }
        {validationError}
        <select id={id} css={selectStyle} data-hasvalue={!!value} value={value || ""} onChange={(e) => {
            setValue(e.target.value)
            if(onChange){
                onChange(e)
            }
        }} {...other}>
            {children}
        </select>
    </div>)

} 