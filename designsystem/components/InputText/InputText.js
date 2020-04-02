/** @jsx jsx */
import { jsx } from '@emotion/core'
import { InputStyle,InputWrapperStyle, ClearInput, Label, invalidStyle } from "./InputText.css"
import {Icon} from '../Icon/Icon';
import React, { useRef,useState } from 'react';


export const InputText = React.forwardRef(({style,wrapperStyle, placeholder, id, onChange, onClear,validationError,
    name, disabled, type="text", ...other},ref) => {
    
    const { label } = other
    
    let inputRef = useRef();
    let [text,setText] = useState(null)
    const invalid = validationError ? invalidStyle : null
    
    return <div css={[InputWrapperStyle,wrapperStyle, invalid]}>
            { label && <label css={Label} htmlFor={id}>{label}</label> }
            {validationError}
            <input 
                ref={(el) => {
                    inputRef.current = el
                    return typeof ref === 'function' ? ref(el) : null
                }}
                css={[InputStyle,style]} 
                name={name} 
                disabled={disabled} 
                placeholder={placeholder} 
                id={id} 
                onChange={(e) =>{
                        onChange(e);
                        setText(e.target.value);
                    }
                } 
                type={type} 
                {...other}  
            />

            {type == "search" && text != null && text != "" ?     
                <button tabIndex="-1" css={ClearInput} className="noState" onClick={(e) =>{
                    e.preventDefault();
                    if(inputRef == null || inputRef.current == null) return;
                    inputRef.current.value = "";
                    setText("");
                    inputRef.current.dispatchEvent(new Event('change'));
                    if(onClear){
                        onClear(e);
                    }
                }}>
                    <Icon icon="Clear" /></button> : 
                null}
        </div> 
})