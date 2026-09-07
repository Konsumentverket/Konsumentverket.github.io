/** @jsx jsx */
import { jsx } from '@emotion/react';

export { SystemIcon } from './iconsSystem.js';
export * from './iconsSystem.js';

export * from './allIcons.js';

/*
 * Registrerar hela ikonuppsättningen för den som importerar paketroten, så att
 * SystemIcon fungerar oförändrat för konsumenter som ännu inte gått över till att
 * importera enskilda ikoner. Konsumenter som vill slippa hela uppsättningen importerar
 * SystemIcon och registerIcons direkt från './iconsSystem.js' och registrerar bara de
 * ikoner de faktiskt använder.
 */
import { registerIcons } from './iconsSystem.js';
import * as allSystemIcons from './allIcons.js';

registerIcons(allSystemIcons);
