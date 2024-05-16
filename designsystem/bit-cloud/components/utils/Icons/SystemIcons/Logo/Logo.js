/** @jsx jsx */
import { jsx } from '@emotion/core';

export const Logo = ({ className, style, title, ...otherAttr }) => {
  return (
    <svg className={className} css={style} width="169" height="71" viewBox="0 0 169 71" fill="none" xmlns="http://www.w3.org/2000/svg" {...otherAttr}>
      <rect x="0.5" y="0.5" width="168" height="70" rx="7.5" fill="#162259"/>
      <rect x="0.5" y="0.5" width="168" height="70" rx="7.5" stroke="white"/>
      <path
        d="M18.3681 25.475L21.2346 22.0556L27.1156 32.3802H30.4962L23.2709 19.6471L29.8885 11.7479H26.2832L18.3681 21.506V11.7479H15.4006V32.3802H18.3681V25.475Z"
        fill="white"/>
      <path
        d="M38.5288 30.2361C36.2763 30.2361 34.9316 28.2229 34.9316 24.851C34.9316 21.4793 36.2763 19.4665 38.5288 19.4665C40.7814 19.4665 42.1261 21.4793 42.1261 24.851C42.1261 28.2229 40.7814 30.2361 38.5288 30.2361ZM38.5288 17.0461C34.6773 17.0461 32.1887 20.1097 32.1887 24.851C32.1887 29.5927 34.6773 32.6565 38.5288 32.6565C42.3803 32.6565 44.8692 29.5927 44.8692 24.851C44.8692 20.1097 42.3803 17.0461 38.5288 17.0461Z"
        fill="white"/>
      <path
        d="M50.7084 21.4344C51.6754 20.468 53.2453 19.4664 54.5305 19.4664C55.9501 19.4664 56.5556 20.1194 56.5556 21.6502V32.3802H59.2986V21.5951C59.2986 18.7466 57.5897 17.0461 54.7268 17.0461C53.345 17.0461 51.9412 17.661 50.7084 18.7937V17.3222H47.9656V32.3802H50.7084V21.4344Z"
        fill="white"/>
      <path
        d="M68.1746 30.2361C66.5812 30.2361 65.2372 29.5254 64.2882 28.1808L64.074 27.8773L61.8874 29.4995L62.103 29.7827C63.476 31.5824 65.7665 32.6565 68.2305 32.6565C70.8651 32.6565 73.7006 31.2331 73.7006 28.1074C73.7006 24.807 70.7368 23.9385 68.3554 23.2404C66.4062 22.6689 65.2229 22.2488 65.2229 21.2365C65.2229 20.1117 66.0531 19.4665 67.5006 19.4665C68.8805 19.4665 69.8569 19.9948 70.983 21.3502L71.2198 21.6355L73.1404 19.974L72.9673 19.7161C71.9309 18.1741 69.7545 17.076 67.6728 17.0461L67.5886 17.0457C64.5253 17.0457 62.568 18.6574 62.48 21.2526C62.379 24.3936 65.2257 25.2031 67.5127 25.8532C69.6563 26.4628 70.9578 26.926 70.9578 28.2175C70.9578 29.1933 70.2267 30.2361 68.1746 30.2361Z"
        fill="white"/>
      <path
        d="M81.1721 32.6565C82.5534 32.6565 83.9571 32.0416 85.1898 30.9089V32.3803H87.9339V17.3223H85.1898V28.2681C84.2235 29.2345 82.6538 30.2361 81.3684 30.2361C79.949 30.2361 79.3431 29.5831 79.3431 28.0525V17.3223H76.6004V28.1074C76.6004 30.956 78.3092 32.6565 81.1721 32.6565Z"
        fill="white"/>
      <path
        d="M107.392 17.0461C105.838 17.0461 104.246 17.7558 102.865 19.0557C102.139 17.7878 100.742 17.0461 99.0264 17.0461C97.6586 17.0461 96.2059 17.665 95.0365 18.7192V17.3222H92.293V32.3802H95.0365V21.4686C96.0734 20.4751 97.1532 19.4664 98.7454 19.4664C100.015 19.4664 100.658 20.2382 100.658 21.7607V32.3802H103.402V21.4683C104.439 20.4747 105.52 19.4664 107.112 19.4664C108.381 19.4664 109.024 20.2382 109.024 21.7607V32.3802H111.767V21.7607C111.767 17.8639 109.388 17.0461 107.392 17.0461Z"
        fill="white"/>
      <path
        d="M117.611 23.1721C117.783 21.638 118.494 19.4665 121.148 19.4665C122.98 19.4665 124.152 20.8763 124.26 23.1721H117.611ZM127.412 29.1401L127.601 28.8188L125.382 27.6889L125.212 27.99C124.393 29.4383 123.07 30.2361 121.485 30.2361C119.321 30.2361 117.666 28.2638 117.531 25.5925H127.012V23.913C127.012 19.6133 124.799 17.0461 121.092 17.0461C117.258 17.0461 114.78 20.1097 114.78 24.851C114.78 30.6122 118.392 32.6565 121.485 32.6565C124.882 32.6565 126.341 30.9666 127.412 29.1401Z"
        fill="white"/>
      <path
        d="M133.216 21.4344C134.182 20.468 135.752 19.4664 137.038 19.4664C138.457 19.4664 139.062 20.1194 139.062 21.6502V32.3802H141.806V21.5951C141.806 18.7466 140.097 17.0461 137.234 17.0461C135.853 17.0461 134.449 17.661 133.216 18.7934V17.3222H130.472V32.3802H133.216V21.4344Z"
        fill="white"/>
      <path
        d="M146.755 29.9284C146.755 32.1929 148.145 32.6565 150.231 32.6565C151.285 32.6565 152.206 32.568 152.697 32.4198L152.952 32.3425V30.0372L152.534 30.1022C151.956 30.1925 151.387 30.2361 150.794 30.2361C149.499 30.2361 149.499 29.8205 149.499 29.5972V19.742H152.868V17.3223H149.499V12.6035H146.755V17.3223H144.368V19.742H146.755V29.9284Z"
        fill="white"/>
      <path d="M21.4037 52.0764L17.937 40.9749H15.1323L19.8458 56.0337H23.076L27.6721 40.9749H24.8707L21.4037 52.0764Z"
            fill="white"/>
      <path
        d="M31.5105 46.8246C31.6814 45.2909 32.3932 43.1197 35.0472 43.1197C36.8792 43.1197 38.0506 44.5288 38.1589 46.8246H31.5105ZM39.1108 51.6431C38.2929 53.0912 36.9689 53.8886 35.3842 53.8886C33.2199 53.8886 31.5658 51.9168 31.4309 49.2457H40.9104V47.5661C40.9104 43.2657 38.6975 40.6986 34.9912 40.6986C31.1567 40.6986 28.679 43.7626 28.679 48.5039C28.679 54.2651 32.291 56.3098 35.3842 56.3098C38.7813 56.3098 40.2403 54.6195 41.3113 52.793L41.4996 52.4716L39.2812 51.3417L39.1108 51.6431Z"
        fill="white"/>
      <path
        d="M46.5812 43.0238V40.9749H43.8385V56.0337H46.5812V47.7865C47.5712 44.7551 48.8625 43.4981 51.0288 43.4503L51.3816 43.443V40.7536H51.021C48.8382 40.7536 47.58 41.6299 46.5812 43.0238Z"
        fill="white"/>
      <path
        d="M65.3851 40.9749H62.0199L56.6035 47.6429V35.4009H53.8603V56.0337H56.6035V51.5073L58.861 48.964L62.592 56.0337H65.7958L60.7702 46.6677L65.3851 40.9749Z"
        fill="white"/>
      <path
        d="M69.774 46.8246C69.945 45.2909 70.6569 43.1197 73.3107 43.1197C75.1428 43.1197 76.3142 44.5288 76.4225 46.8246H69.774ZM77.3747 51.6431C76.5564 53.0912 75.2327 53.8886 73.6477 53.8886C71.4838 53.8886 69.8294 51.9168 69.6946 49.2457H79.174V47.5661C79.174 43.2657 76.9612 40.6986 73.2549 40.6986C69.4203 40.6986 66.9427 43.7626 66.9427 48.5039C66.9427 54.2651 70.5545 56.3098 73.6477 56.3098C77.0448 56.3098 78.5039 54.6195 79.5751 52.793L79.7634 52.4716L77.5449 51.3417L77.3747 51.6431Z"
        fill="white"/>
      <path
        d="M87.0667 53.8886C85.7719 53.8886 85.7719 53.4732 85.7719 53.25V43.3953H89.14V40.9748H85.7719V36.2563H83.0283V40.9748H80.6424V43.3953H83.0283V53.5813C83.0283 55.8454 84.4183 56.3098 86.5053 56.3098C87.559 56.3098 88.4804 56.2212 88.9696 56.0727L89.2244 55.9956V53.6901L88.8068 53.7554C88.2291 53.8453 87.6597 53.8886 87.0667 53.8886Z"
        fill="white"/>
      <path
        d="M134.063 36.3183H130.44L122.52 45.6326V36.3183H119.551V56.0337H122.52V49.4402L125.387 46.1769L131.272 56.0337H134.662L127.429 43.8727L134.063 36.3183Z"
        fill="white"/>
      <path
        d="M145.01 53.7965C140.621 53.7965 139.7 49.6522 139.7 46.1758C139.7 42.6986 140.621 38.5545 145.01 38.5545C149.399 38.5545 150.32 42.6986 150.32 46.1758C150.32 49.6522 149.399 53.7965 145.01 53.7965ZM145.01 36.0548C139.749 36.0548 136.732 39.7436 136.732 46.1758C136.732 52.6079 139.749 56.297 145.01 56.297C150.271 56.297 153.287 52.6079 153.287 46.1758C153.287 39.7436 150.271 36.0548 145.01 36.0548Z"
        fill="white"/>
      <path
        d="M104.024 44.4524C102.558 44.4524 101.385 45.605 101.385 47.0471C101.385 48.4855 102.558 49.6541 104.024 49.6541C105.49 49.6541 106.678 48.4855 106.678 47.0471C106.678 45.605 105.49 44.4524 104.024 44.4524Z"
        fill="white"/>
    </svg>
  );
};