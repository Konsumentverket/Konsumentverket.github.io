/** @jsxImportSource @emotion/react */

export const DefaultUser = ({ className, style, title, ...otherAttr }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      css={style}
      {...otherAttr}
    >
      <title>{title}</title>

      <rect width="32" height="32" rx="16" fill="#EFF8FD" />
      <path
        d="M16 14.7193C11.4654 14.7193 7.66382 17.8793 7.02575 22.0586C6.86964 23.0819 7.43031 24.0695 8.5178 24.3101C9.66904 24.5651 11.8563 24.8334 16 24.8334C20.1437 24.8334 22.331 24.5651 23.4822 24.3101C24.5693 24.0695 25.1304 23.0819 24.9743 22.0586C24.3366 17.8797 20.5346 14.7193 16 14.7193Z"
        fill="#0061C2"
      />
      <path
        d="M16 5.5C12.9624 5.5 10.5 7.96237 10.5 11C10.5 14.0376 12.9624 16.5 16 16.5C19.0376 16.5 21.5 14.0376 21.5 11C21.5 7.96237 19.0376 5.5 16 5.5Z"
        fill="#0061C2"
      />
    </svg>
  );
};
