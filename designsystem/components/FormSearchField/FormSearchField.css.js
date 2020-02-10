import { css } from '@emotion/core'
import { colors } from '../Colors/Colors';
import { medium } from '../GlobalStyles/globalStyles'

export default css`
position:relative;
display:flex;
flex-direction: row;
align-items: stretch;

.textfield {
    border-radius: 8px 0 0 8px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border: 1px solid #D0D0D0;
    border-right: none;
    padding: 11px 8px 11px 15px;
    font-size: 16px;
    line-height: 24px; 
    outline: none;
    color:#4D4D4D;
    font-style:italic; 
    -webkit-appearance: none;
    top:0;
    margin:0;
    flex-grow: 1;
    width:100%;

    ${medium} {
        height: 5.6rem;
    }

}
button {
    cursor: pointer;
    padding: 0 16px 0 16px;
    background-color: ${colors.theme1.mid};
    border:none;
    border-bottom-right-radius:8px;
    border-top-right-radius:8px;
    color: ${colors.common.white};
    display:block;
 

    &:hover{

    }
    &:active{

    }
    &:focus{
 
    }

    ${medium} {
        padding: 0 24px 0 24px;
    }
}    
.buttontext {
    width:max-content;
    display:flex;
    flex-direction:row;
    font-size:1.8rem;
    line-height:5.4rem;
    position: relative;
    .buttonicon{
        position: relative;
        padding-right: 8px;
        top: 1px;
        right: 0px;
        width: 21px;
        height: auto;
        fill: #fff;
    }
    ${medium} {
        font-size: 21px;
    }
}

&.fieldbutton {
    border:0;
    .buttontext {
        padding-right:35px;
        padding-left:0;

        .buttonicon {
            left:auto;
            right:0;
        }
    }
   
}

`;