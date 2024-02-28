/** @jsx jsx */
import { jsx } from "@emotion/core";

export const AtBranch = ({ className, style, title, ...otherAttr }) => {
  return (
    <svg
      className={className}
      css={style}
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...otherAttr}
    >
      <title>{title}</title>
      <path d="M19.5714286,22.5 L18.8571429,22.5 L18.8571429,1.125 C18.8571429,0.503671875 18.4733929,0 18,0 L6,0 C5.52660714,0 5.14285714,0.503671875 5.14285714,1.125 L5.14285714,22.5 L4.42857143,22.5 C4.19189286,22.5 4,22.7518594 4,23.0625 L4,24 L20,24 L20,23.0625 C20,22.7518594 19.8081071,22.5 19.5714286,22.5 Z M9,3.5625 C9,3.25185938 9.16790625,3 9.375,3 L10.625,3 C10.8320938,3 11,3.25185938 11,3.5625 L11,5.4375 C11,5.74814062 10.8320938,6 10.625,6 L9.375,6 C9.16790625,6 9,5.74814062 9,5.4375 L9,3.5625 Z M9,8.5625 C9,8.25185937 9.16790625,8 9.375,8 L10.625,8 C10.8320938,8 11,8.25185937 11,8.5625 L11,10.4375 C11,10.7481406 10.8320938,11 10.625,11 L9.375,11 C9.16790625,11 9,10.7481406 9,10.4375 L9,8.5625 Z M10.625,15 L9.375,15 C9.16790625,15 9,14.7481406 9,14.4375 L9,12.5625 C9,12.2518594 9.16790625,12 9.375,12 L10.625,12 C10.8320938,12 11,12.2518594 11,12.5625 L11,14.4375 C11,14.7481406 10.8320938,15 10.625,15 Z M13,23 L11,23 L11,18.625 C11,18.2798437 11.1679062,18 11.375,18 L12.625,18 C12.8320938,18 13,18.2798437 13,18.625 L13,23 Z M15,14.4375 C15,14.7481406 14.8320938,15 14.625,15 L13.375,15 C13.1679062,15 13,14.7481406 13,14.4375 L13,12.5625 C13,12.2518594 13.1679062,12 13.375,12 L14.625,12 C14.8320938,12 15,12.2518594 15,12.5625 L15,14.4375 Z M15,10.4375 C15,10.7481406 14.8320938,11 14.625,11 L13.375,11 C13.1679062,11 13,10.7481406 13,10.4375 L13,8.5625 C13,8.25185937 13.1679062,8 13.375,8 L14.625,8 C14.8320938,8 15,8.25185937 15,8.5625 L15,10.4375 Z M6.125,9 C6.33210937,9 6.5,9.25183594 6.5,9.5625 L6.5,9.5625 L6.5,20.25 L6.8125,20.25 C6.91604688,20.25 7,20.3759297 7,20.53125 L7,20.53125 L7,21 L0,21 L0,20.53125 C0,20.3759297 0.083953125,20.25 0.1875,20.25 L0.1875,20.25 L0.5,20.25 L0.5,9.5625 C0.5,9.25183594 0.667890625,9 0.875,9 L0.875,9 Z M3.8125,17 L3.1875,17 C3.08395312,17 3,17.1399219 3,17.3125 L3,17.3125 L3,19.5 L4,19.5 L4,17.3125 C4,17.1399219 3.91604688,17 3.8125,17 L3.8125,17 Z M23.125,5 C23.3321094,5 23.5,5.25183594 23.5,5.5625 L23.5,5.5625 L23.5,16.25 L23.8125,16.25 C23.9160469,16.25 24,16.3759297 24,16.53125 L24,16.53125 L24,17 L17,17 L17,16.53125 C17,16.3759297 17.0839531,16.25 17.1875,16.25 L17.1875,16.25 L17.5,16.25 L17.5,5.5625 C17.5,5.25183594 17.6678906,5 17.875,5 L17.875,5 Z M3.8125,15 L3.1875,15 C3.08395312,15 3,15.1259297 3,15.28125 L3,15.28125 L3,16.21875 C3,16.3740703 3.08395312,16.5 3.1875,16.5 L3.1875,16.5 L3.8125,16.5 C3.91604688,16.5 4,16.3740703 4,16.21875 L4,16.21875 L4,15.28125 C4,15.1259297 3.91604688,15 3.8125,15 L3.8125,15 Z M20.8125,13 L20.1875,13 C20.0839531,13 20,13.1399219 20,13.3125 L20,13.3125 L20,15.5 L21,15.5 L21,13.3125 C21,13.1399219 20.9160469,13 20.8125,13 L20.8125,13 Z M3.8125,13 L3.1875,13 C3.08395312,13 3,13.1259297 3,13.28125 L3,13.28125 L3,14.21875 C3,14.3740703 3.08395312,14.5 3.1875,14.5 L3.1875,14.5 L3.8125,14.5 C3.91604688,14.5 4,14.3740703 4,14.21875 L4,14.21875 L4,13.28125 C4,13.1259297 3.91604688,13 3.8125,13 L3.8125,13 Z M3.8125,11 L3.1875,11 C3.08395312,11 3,11.1259297 3,11.28125 L3,11.28125 L3,12.21875 C3,12.3740703 3.08395312,12.5 3.1875,12.5 L3.1875,12.5 L3.8125,12.5 C3.91604688,12.5 4,12.3740703 4,12.21875 L4,12.21875 L4,11.28125 C4,11.1259297 3.91604688,11 3.8125,11 L3.8125,11 Z M20.8125,11 L20.1875,11 C20.0839531,11 20,11.1259297 20,11.28125 L20,11.28125 L20,12.21875 C20,12.3740703 20.0839531,12.5 20.1875,12.5 L20.1875,12.5 L20.8125,12.5 C20.9160469,12.5 21,12.3740703 21,12.21875 L21,12.21875 L21,11.28125 C21,11.1259297 20.9160469,11 20.8125,11 L20.8125,11 Z M20.8125,9 L20.1875,9 C20.0839531,9 20,9.12592969 20,9.28125 L20,9.28125 L20,10.21875 C20,10.3740703 20.0839531,10.5 20.1875,10.5 L20.1875,10.5 L20.8125,10.5 C20.9160469,10.5 21,10.3740703 21,10.21875 L21,10.21875 L21,9.28125 C21,9.12592969 20.9160469,9 20.8125,9 L20.8125,9 Z M20.8125,7 L20.1875,7 C20.0839531,7 20,7.12592969 20,7.28125 L20,7.28125 L20,8.21875 C20,8.37407031 20.0839531,8.5 20.1875,8.5 L20.1875,8.5 L20.8125,8.5 C20.9160469,8.5 21,8.37407031 21,8.21875 L21,8.21875 L21,7.28125 C21,7.12592969 20.9160469,7 20.8125,7 L20.8125,7 Z M14.625,3 C14.8320938,3 15,3.25185938 15,3.5625 L15,5.4375 C15,5.74814062 14.8320938,6 14.625,6 L13.375,6 C13.1679062,6 13,5.74814062 13,5.4375 L13,3.5625 C13,3.25185938 13.1679062,3 13.375,3 L14.625,3 Z"></path>
    </svg>
  );
};