/** @jsx jsx */
import { jsx } from '@emotion/core'
import {useRef} from 'react'
import {fieldWrapper, fieldInput, fieldLabel, disabledStyle} from './InputRadio.css'

export const InputRadio = ({
    name, id, labelText,
    fieldWrapperStyle, fieldInputStyle, fieldLabelStyle,
    onChange, value, checked, disabled, className, tabIndex, dataQuestion, dataAnswer
    }) => { 
        const inputRef = useRef(null);
        return <div css={[fieldWrapper, disabled && disabledStyle, fieldWrapperStyle]} 
                    className={`${checked ? "inputHasValue" : ""} ${className}`} 
                >
                <label className="radiolabel" css={[fieldLabel, fieldLabelStyle]} htmlFor={id}>
                    <input ref={inputRef} css={[fieldInput,fieldInputStyle]} id={id} name={name}
                        type="radio"
                        tabIndex={tabIndex}
                        onChange={(e) => {
                            if (onChange && !document.body.classList.contains('tabnav')) {
                                onChange(e)
                            }
                        }} 
                        value={value} 
                        checked={checked}
                        disabled={disabled}
                        onKeyUp={(e) => {
                            //32 == space
                            if(e.which === 32 || e.key == 'Enter'){
                                onChange(e)
                            }
                        }}
                        data-question={dataQuestion}
                        data-answer={dataAnswer}
                    >
                    </input>
                    {labelText}
                </label>
            </div>

} 