/** @jsx jsx */
import { jsx } from '@emotion/core'
import { InputStyle,InputWrapperStyle, ClearInput, ClearInputLabel, Label, invalidStyle, LoadingStyle } from "./InputText.css"
import {Icon} from '../Icon/Icon';
import React, { useRef,useState } from 'react';
import { VisuallyHidden } from '../GlobalStyles/globalStyles';
import Loading from '../Loading/Loading';


export const InputText = React.forwardRef(({style,wrapperStyle, placeholder, id, onChange, onClear,validationError,
    name, disabled, label, hideLabel = false,loading = false, type="text", ...other},ref) => {
    
    let inputRef = useRef();
    let [text,setText] = useState(null)
    const invalid = validationError ? invalidStyle : null
    
    return <div css={[InputWrapperStyle,wrapperStyle, invalid]}>
            { label && <label css={[Label,hideLabel ? VisuallyHidden : null]} htmlFor={id}>{label}</label> }
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

            {type == "search" && !loading && text != null && text != "" ?     
                <span tabIndex="-1" css={label && !hideLabel ? ClearInputLabel : ClearInput} className="noState" onClick={(e) =>{
                    e.preventDefault();
                    if(inputRef == null || inputRef.current == null) return;
                    inputRef.current.value = "";
                    setText("");
                    inputRef.current.dispatchEvent(new Event('change'));
                    if(onClear){
                        onClear(e);
                    }
                }}>
                    <Icon icon="Clear" /></span> : 
                null}

            { loading && <Loading style={LoadingStyle} /> }
        </div> 
})