/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'

import {
    wrapperStyle,
    labelStyle,
    checkbox,
    invertedLabelStyle,
    invertedfieldStyle,
} from './FormCheckbox.css'


export const FormCheckbox = ({ 
    name,
    id,
    labelText, 
    value,  
    invertedBackgroundColor = false, 
    checked = false, 
    onChange,  
    style 
}) => {

    let fieldStyles = [checkbox]
    let labelStyles = [labelStyle]
    if (invertedBackgroundColor){
        labelStyles.push(invertedLabelStyle)
        fieldStyles.push(invertedfieldStyle)
    }
    style && labelStyles.push(style)

    return <div css={[wrapperStyle, checkbox]} data-checked={checked}>
        <input 
            id={id}
            name={name}
            type='checkbox'
            className='checkbox'
            value={value}
            onChange={onChange}
            checked= {checked}
        />
        <label htmlFor={id} css={[labelStyles]} className='checkbox-label'>{labelText}</label>
    </div>
}

