/** @jsx jsx */
import { jsx } from '@emotion/react';
import { getRegisteredIcon } from '@konsumentverket-sverige/designsystem.icons-system/dist/iconsSystem.js';
import * as EditorIcons from '@konsumentverket-sverige/designsystem.icons-editor';

const Icon = ({ icon, className, style, title, ...otherAttr }) => {
  /*
   * Systemikonerna hämtas ur registret, som appen fyller med just de ikoner den
   * använder. Redigeringsikonerna slås fortfarande upp i sin barrel: de väljs av
   * redaktörer i Contentful, så vilka namn som kan förekomma går inte att veta vid
   * byggtid.
   */
  const Component = getRegisteredIcon(icon) || EditorIcons[icon];

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
