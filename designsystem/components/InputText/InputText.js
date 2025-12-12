/** @jsx jsx */

import { jsx } from '@emotion/core'

import { InputStyle,InputWrapperStyle, ClearInput, Label, invalidStyle, LoadingStyle } from "./InputText.css"

import React, { useRef,useState } from 'react';

import { VisuallyHidden } from '../GlobalStyles/globalStyles';

import Loading from '../Loading/Loading';

import Clear from '../Icons/SystemIcons/Clear/Clear';





export const InputText = React.forwardRef(({style,wrapperStyle, placeholder, id, onChange, onClear,validationError,

    name, disabled, label, hideLabel = false,loading = false, type="text", ...other},ref) => {

    

    let inputRef = useRef();

    let [text,setText] = useState(null)

    const invalid = validationError ? invalidStyle : null

    

    let innerContent = null;

    

    if(type == "search" && !loading && text != null && text != "") {

        innerContent = <a href="#" css={ClearInput} className="noStyle" onClick={(e) =>{

            e.preventDefault();

            if(inputRef == null || inputRef.current == null) return;

            inputRef.current.value = "";

            setText("");

            inputRef.current.dispatchEvent(new Event('change'));

            if(onClear){

                onClear(e);

            }

        }}><Clear /></a>

    }

    if(loading){

        innerContent = <Loading style={LoadingStyle} />;

    }



    return <div css={[InputWrapperStyle,wrapperStyle, invalid]}>

            { label && <label css={[Label,hideLabel ? VisuallyHidden : null]} htmlFor={id}>{label}</label> }

            {validationError}

            <input 

                ref={(el) => {

                    inputRef.current = el

                    return typeof ref === 'function' ? ref(el) : null

                }}

                css={[InputStyle(innerContent != null),style]} 

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



            {innerContent}

        </div> 

})