// @ts-check
import { BeHive, seed, MountObserver } from 'be-hive/be-hive.js';
/** @import {EMC} from './ts-refs/trans-render/be/types' */

/**
 * @type {EMC}
 */
export const emc = {
    base: 'be-parsed',
    enhPropKey: 'beParsed',
    importEnh: async () => {
        const { BeParsed } = 
        /** @type {{new(): IEnhancement<Element>}} */ 
        /** @type {any} */
        (await import('./be-parsed.js'));
        return BeParsed;
    },
    ws: []
}
const mose = seed(emc);
MountObserver.synthesize(document, BeHive, mose);