import { css, Global } from '@emotion/core'
import { spacing } from '../Spacing/Spacing'
import { colors } from '../Colors/Colors';
import React, { useEffect } from 'react';
import { filePdfPath } from '../Icons/SystemIcons/FilePdf/FilePdf';
import { fileWordPath } from '../Icons/SystemIcons/FileWord/FileWord';
import { filePowerpointPath } from '../Icons/SystemIcons/FilePowerpoint/FilePowerpoint';
import { fileExcelPath } from '../Icons/SystemIcons/FileExcel/FileExcel';
import { filePath } from '../Icons/SystemIcons/File/File';

export const GlobalStyles = ({
  fontSize = "62.5%",
  fontFamily = "'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
}) => {

  useEffect(() => {
    document.addEventListener('keyup', e => {
      if (e.key === "Tab" && !document.body.classList.contains("tabnav")) {
        document.body.classList.add("tabnav");
      }
    })
    document.addEventListener('click', e => {
      // if detail is 0 it's most likely a keypress and not a mouse click
      if (e.detail !== 0 && document.body.classList.contains("tabnav")) { document.body.classList.remove("tabnav") }
    })
    return () => { }
  }, [])

  return <Global styles={globalStyles(fontSize, fontFamily)} />
}

const fileIcon = (fileSvgPath) => `
  &:before{
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 30' %3E%3Cpath fill='${encodeURIComponent(colors.theme1.mid)}' d='${fileSvgPath}'/%3E%3C/svg%3E");
  }
`


const globalStyles = (
  fontSize = "62.5%",
  fontFamily = "'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
) => css`
  html, body,
  button, div, span, applet,
  object, iframe, h1, h2, h3, h4,h5, h6,
  p, blockquote, pre,a,abbr, acronym,address,
  big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,
  small,strike,strong,sub,sup,tt,b,u,i,center,dl,
  dt,dd,ol,ul,li,fieldset,form,label,legend,table,
  caption,tbody,tfoot,thead,tr,th,td,article,aside,
  canvas,details,embed,figure,figcaption,footer,
  header,hgroup,menu,nav,output,ruby,section,summary,
  time,mark,audio,video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    html{
      font-size: ${fontSize};
      font-family: ${fontFamily};
      line-height: 16px;
      color: #4D4D4D;
      overflow-x:hidden;
    }

    body {

      font-size: 1.6rem;
      margin:0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      margin: 0;

      &:not(.tabnav){
        *:focus {
          outline: none;
        }
      }
      &.tabnav {
        *:focus {
          outline: 4px solid ${colors.states.focus};
        }
      }

    }


    p {
      padding-bottom: ${spacing.s};
      font-size: 1.8rem;
      line-height: 3.2rem;
    }

    ul {
      list-style: bullet inside none;

      li {
        margin-bottom: ${spacing.s};
      }
    }

    h1, h2 {
      margin-bottom: 1.6rem;
    }
    h3, h4, h5, h6 {
      margin-bottom: .8rem;
    }

    i {
      font-style: italic;
    }
    strong {
      font-weight: 700;
    }
    u {
      text-decoration: underline;
    }

    a {
      &.external {
        svg.external {
          margin-left: 3px;
        }
      }

      &:not(.noStyle){
        text-decoration:underline;
        font-weight:700;
        color:${colors.theme1.mid};
        svg {
          fill: ${colors.theme1.mid};
        }

        &[href$=".pdf"],
        &[href$=".doc"],
        &[href$=".docx"],
        &[href$=".ppt"],
        &[href$=".pptx"],
        &[href$=".txt"],
        &[href$=".xlt"],
        &[href$=".xltx"]{
          margin-left: 3.2rem;
          position: relative;
          display: inline-flex;
          align-items: center;
          &:hover {
            box-shadow: 0 0 0 2px ${colors.theme1.midLight};
          }
          &:before{
            content: '';
            display:inline-block;
            background-repeat: no-repeat;
            background-size: 22px 30px;
            background-position: 0px 0px;
            width: 22px;
            height: 30px;
            position: absolute;
            left: -3.2rem;
            top: 50%;
            transform: translateY(-50%);
          }
        }

        &[href$=".pdf"] { ${fileIcon(filePdfPath)} }

        &[href$=".ppt"],
        &[href$=".pptx"] { ${fileIcon(filePowerpointPath)} }

        &[href$=".doc"],
        &[href$=".docx"] { ${fileIcon(fileWordPath)} }

        &[href$=".xlt"],
        &[href$=".xltx"] { ${fileIcon(fileExcelPath)} }

        &[href$=".txt"] { ${fileIcon(filePath)} }

        &:hover {
          box-shadow: 0 0 0 4px ${colors.theme1.midLight};
          border-radius: .4rem;
          background-color:${colors.theme1.midLight};
          text-decoration:none;
          svg {
            fill: ${colors.theme1.mid};
          }
        }
        &:visited{
          color:${colors.states.visited};
          svg {
            fill: ${colors.states.visited};
          }
        }

        &:active{
          box-shadow: 0 0 0 4px ${colors.theme1.midLight};
          border-radius: .4rem;
          background-color:${colors.theme1.midLight};
          color:${colors.theme1.xDark};
          text-decoration:none;
          svg {
            fill: ${colors.theme1.xDark};
          }
        }

        &.invertedStyle:not(.noStyle){
          &:visited{
            background-color:inherit;
          }
          &:hover {
            background-color:#fff;
            box-shadow: 0 0 0 4px #fff;
          }
          &:active {
            box-shadow: 0 0 0 4px #fff;
            background-color:#fff;
          }
        }
      }

    }
`;

const LinkColors = css`
  color:${colors.theme1.mid} !important;
   &:hover {
    background-color:${colors.theme1.midLight} !important;
   }
   &:active {
    background-color:${colors.theme1.midLight} !important;
    color:${colors.theme1.xDark} !important;
   }
   &:visited{
    color:${colors.states.visited} !important;
  }
`;

const LinkColorsInverted = css`
 color:${colors.theme1.mid} !important;
   &:hover {
     background-color:#fff !important;
     box-shadow: 0 0 0 4px #FFF !important;
   }
   &:active {
     background-color:#fff !important;
     box-shadow: 0 0 0 4px #FFF !important;
     color:${colors.theme1.xDark} !important;
   }
   &:visited{
    color:${colors.states.visited} !important;
  }
`;

export const LinkWrapperColorStyle = css`
    a {
      ${LinkColors}
    }
`;

export const LinkWrapperInvertedColorStyle = css`
    a {
      ${LinkColorsInverted}
    }
`;

export const ElementLinkColorStyle = css`
    ${LinkColors}
`;

export const ElementLinkInvertedColorStyle = css`
    ${LinkColorsInverted}
`;

export const VisuallyHidden = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

export const viewportSmall = 420;
export const viewportMedium = 768;
export const viewportLarge = 1120;

const mediaQueryMaxWidth = (width) => `@media (max-width: ${width}px)`;
const mediaQueryMinWidth = (width) => `@media (min-width: ${width}px)`;

export const small = mediaQueryMaxWidth(viewportSmall);
export const medium = mediaQueryMinWidth(viewportMedium);
export const large = mediaQueryMinWidth(viewportLarge);
