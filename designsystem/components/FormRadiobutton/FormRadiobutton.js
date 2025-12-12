/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { wrapperStyle, labelStyle, fieldStyle, invertedLabelStyle, invertedfieldStyle } from './FormRadiobutton.css';



export const FormRadiobutton = ({ 
    name,
    id,
    labelText, 
    value,  
    invertedBackgroundColor=false, 
    checked = false, 
    onChange,  
    style }) => {

    var fieldStyles = [fieldStyle];
    var labelStyles = [labelStyle];
    if (invertedBackgroundColor){
        labelStyles.push(invertedLabelStyle);
        fieldStyles.push(invertedfieldStyle)
    }
    style && labelStyles.push(style)


    return <>
    <div css={wrapperStyle}>
    <input 
    id={id}
    name={name}
    type="radio" css={[fieldStyles]}
    value={value}
    onChange={onChange}
    checked= {checked}
    />
    <label htmlFor={id} css={[labelStyles]}>{labelText}</label>
    </div>
       </>         
       
            
    
}

