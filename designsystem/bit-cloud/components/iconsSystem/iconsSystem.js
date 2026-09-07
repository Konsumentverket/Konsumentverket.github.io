/** @jsx jsx */
import { jsx } from '@emotion/react';

const ACCESSIBLE_ICONS = ['External'];

/*
 * Ikonerna slås upp i ett register i stället för att importeras från barreln.
 *
 * Tidigare stod här `import * as systemIconDefinitions from './index'`, vilket band
 * SystemIcon till samtliga 113 ikoner. Eftersom uppslaget sker på en sträng vid
 * körning kunde ingen bundlare avgöra vilka som behövdes, så varje sida som använde
 * någon komponent med en ikon fick hela uppsättningen. Med ett register avgör i
 * stället anroparen vad som ska finnas tillgängligt, och bara det hamnar i bundlen.
 *
 * Den som importerar paketroten får fortfarande allt registrerat automatiskt – se
 * index.ts – så befintliga konsumenter beter sig precis som förut.
 */
const registry = {};

// Namn vi redan varnat för, så samma varning inte upprepas per rendering.
const warned = new Set();

export const registerIcons = (icons) => {
  if (!icons) return;
  for (const name of Object.keys(icons)) {
    const candidate = icons[name];
    if (typeof candidate === 'function') registry[name] = candidate;
  }
};

/*
 * Låter komponenter som gör sitt eget uppslag – exempelvis den generiska Icon, som
 * faller tillbaka på redigeringsikonerna – nå registret utan att importera barreln.
 */
export const getRegisteredIcon = (name) => registry[name];

export const SystemIcon = ({ icon, className, style, title, ...otherAttr }) => {
  const Element = registry[icon];

  if (typeof Element !== 'function') {
    /*
     * Ett oregistrerat namn ger ingen ikon och inget fel – utrymmet blir bara tomt.
     * Det är ett tyst felläge som annars upptäcks först av en besökare, så i
     * utvecklingsläge säger vi ifrån. Varje namn varnas en gång, för att inte dränka
     * konsolen när samma ikon renderas i en lista.
     */
    if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV !== 'production') {
      if (icon && !warned.has(icon)) {
        warned.add(icon);
        // eslint-disable-next-line no-console
        console.warn(
          `[SystemIcon] Ikonen "${icon}" är inte registrerad och renderas därför inte. ` +
            'Importera den och skicka den till registerIcons() i komponenten som använder den.'
        );
      }
    }
    return null;
  }

  const isAccessible = ACCESSIBLE_ICONS.includes(icon);

  return (
    <Element
      className={className}
      css={style}
      focusable="false"
      {...(!isAccessible && !title ? { 'aria-hidden': true } : {})}
      {...(title ? { role: 'img', 'aria-label': title } : {})}
      {...otherAttr}
    />
  );
};
