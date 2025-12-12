/** @jsx jsx */
import { jsx,css } from '@emotion/core'
import { colors } from '../Colors/Colors';
  
const loaderStyle = ({color = colors.theme2.midLight, width='80px', height="80px",border="6px"}) => css`
    display: inline-block;
    width: ${width};
    height: ${height};
  
  &:after {
    content: " ";
    display: block;
    width: ${width};
    height: ${height};
    border-radius: 50%;
    border: ${border} solid ${color};
    border-color: ${color} transparent ${color} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

`

export default ({color, size = "small",style}) => {
    let sizeStyle = null
    switch(size){
        case "small":
            sizeStyle= {
                width: '20px',
                height: '20px',
                border: '3px',
                color: color
            }

    }


    return <div css={[loaderStyle(sizeStyle),style]} aria-busy="true" className="lds-dual-ring"></div>;

}