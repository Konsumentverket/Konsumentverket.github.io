/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export const OperationIcon = ({ className, style, title, ...otherAttr }) => {
        return <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Group">
            <g id="1711464248260-8085392_text-flow-rows">
              <path id="1711464248260-8085392_Vector 1378 (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M6.33337 8.33337C6.07073 8.33337 5.81066 8.28164 5.56801 8.18113C5.32536 8.08062 5.10488 7.93331 4.91916 7.74759C4.73344 7.56187 4.58612 7.34139 4.48561 7.09874C4.38511 6.85609 4.33337 6.59602 4.33337 6.33337C4.33337 6.07073 4.38511 5.81066 4.48561 5.56801C4.58612 5.32536 4.73344 5.10488 4.91916 4.91916C5.10488 4.73344 5.32536 4.58612 5.56801 4.48561C5.81066 4.38511 6.07073 4.33337 6.33337 4.33337H23.6667C24.0622 4.33346 24.4488 4.4508 24.7776 4.67057C25.1064 4.89034 25.3627 5.20267 25.5141 5.56807C25.6654 5.93346 25.705 6.33553 25.6279 6.72344C25.5507 7.11134 25.3603 7.46767 25.0807 7.74737L11.162 21.6667H23.6667C24.1971 21.6667 24.7058 21.8774 25.0809 22.2525C25.456 22.6276 25.6667 23.1363 25.6667 23.6667C25.6667 24.1971 25.456 24.7058 25.0809 25.0809C24.7058 25.456 24.1971 25.6667 23.6667 25.6667H6.33337C5.93787 25.6666 5.55128 25.5493 5.22246 25.3295C4.89364 25.1097 4.63736 24.7974 4.48602 24.432C4.33468 24.0666 4.29507 23.6646 4.37221 23.2766C4.44934 22.8887 4.63975 22.5324 4.91937 22.2527L18.838 8.33337H6.33337Z" fill="#F59C00"/>
              <path id="1711464248260-8085392_Union" d="M20 23.6667C20 21.3727 20.0947 19.8807 20.2007 18.9273C20.2793 18.2247 20.682 17.6453 21.2773 17.348C21.8613 17.056 22.548 17.0753 23.146 17.3727C26.576 19.0793 28.7247 20.734 29.9173 21.8153C31.0333 22.8267 31.0333 24.5067 29.9173 25.518C28.724 26.5987 26.576 28.254 23.146 29.96C22.548 30.258 21.8613 30.2773 21.2773 29.9853C20.682 29.688 20.2793 29.1087 20.2007 28.4053C20.0947 27.452 20 25.9607 20 23.6667Z" fill="#F59C00"/>
              <path id="1711464248260-8085392_Union_2" fillRule="evenodd" clipRule="evenodd" d="M6.33335 1.86638e-05C4.88135 1.86638e-05 3.78068 0.0400187 2.97202 0.0900187C1.39335 0.186685 0.186685 1.39335 0.0900184 2.97202C0.0258446 4.09129 -0.00416936 5.21225 1.84498e-05 6.33335C1.84498e-05 7.78535 0.0400184 8.88602 0.0900184 9.69468C0.186685 11.2734 1.39335 12.48 2.97202 12.5767C3.78068 12.6267 4.88135 12.6667 6.33335 12.6667C7.78535 12.6667 8.88602 12.6267 9.69468 12.5774C11.2734 12.48 12.48 11.2734 12.5767 9.69468C12.6409 8.57542 12.6709 7.45445 12.6667 6.33335C12.6667 4.88135 12.6267 3.78069 12.5774 2.97202C12.48 1.39335 11.2734 0.186685 9.69468 0.0900187C8.57542 0.0258432 7.45445 -0.0041708 6.33335 1.86638e-05ZM6.33335 17.3334C4.88135 17.3334 3.78068 17.3734 2.97202 17.4227C1.39335 17.52 0.186685 18.7267 0.0900184 20.3054C0.0258442 21.4246 -0.00416977 22.5456 1.84498e-05 23.6667C1.84498e-05 25.1187 0.0400184 26.2193 0.0900184 27.028C0.186685 28.6067 1.39335 29.8134 2.97202 29.91C3.78068 29.96 4.88135 30 6.33335 30C7.78535 30 8.88602 29.96 9.69468 29.91C11.2734 29.8134 12.48 28.6067 12.5767 27.028C12.6409 25.9087 12.6709 24.7878 12.6667 23.6667C12.6667 22.2147 12.6267 21.114 12.5774 20.3054C12.48 18.7267 11.2734 17.52 9.69468 17.4234C8.57542 17.3592 7.45445 17.3292 6.33335 17.3334ZM20.3054 0.0900187C21.4246 0.0258432 22.5456 -0.0041708 23.6667 1.86638e-05C25.1187 1.86638e-05 26.2193 0.0400187 27.028 0.0900187C28.6067 0.186685 29.8134 1.39335 29.91 2.97202C29.96 3.78069 30 4.88135 30 6.33335C30 7.78535 29.96 8.88602 29.91 9.69468C29.8134 11.2734 28.6067 12.48 27.028 12.5767C25.9087 12.6409 24.7878 12.6709 23.6667 12.6667C22.5456 12.6711 21.4246 12.6413 20.3054 12.5774C18.7267 12.48 17.52 11.2734 17.4234 9.69468C17.3592 8.57542 17.3292 7.45445 17.3334 6.33335C17.3334 4.88135 17.3734 3.78069 17.4227 2.97202C17.52 1.39335 18.7267 0.186685 20.3054 0.0900187Z" fill="#FCEBD5"/>
            </g>
          </g>
        </svg>;
}
