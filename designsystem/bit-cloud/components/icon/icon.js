/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as SystemIcons from '@konsumentverket-sverige/designsystem.icons-system';
import * as EditorIcons from '@konsumentverket-sverige/designsystem.icons-editor';

const Icon = ({ icon, className, style, title, ...otherAttr }) => {
  const Component = SystemIcons[icon] || EditorIcons[icon];

  if (!Component) {
    console.warn(`Icon not found: ${icon}`);
    return null;
  }

  return (
    <Component
      focusable="false"
      className={className}
      css={style}
      aria-hidden={icon !== 'External'}
      title={title}
      {...otherAttr}
    />
  );
};

export { Icon };
