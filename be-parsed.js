// @ts-check
import { propInfo, rejected, resolved } from 'be-enhanced/cc.js';
import { BE } from 'be-enhanced/BE.js';
import {dispatchEvent as de} from 'trans-render/positractions/dispatchEvent.js';
/** @import {BEConfig, IEnhancement, BEAllProps} from './ts-refs/be-enhanced/types.d.ts' */
/** @import {Actions, PAP, AllProps, AP} from './ts-refs/be-parsed/types' */;

/**
 * @implements {Actions}
 * 
 */
class BeParsed extends BE {
    /**
     * @type {BEConfig<AP & BEAllProps, Actions & IEnhancement, any>}
     */
    static config = {
        propInfo: {
            ...propInfo
        },
        positractions: [resolved, rejected],
    }

    /**
     * 
     * @param {HTMLScriptElement} el 
     * @param {import('./ts-refs/trans-render/be/types').EnhancementInfo} enhancementInfo 
     */
    async attach(el, enhancementInfo) {
        super.attach(el, enhancementInfo);
        this.value = JSON.parse(el.innerHTML);
        this.resolved = true;
    }

    de = de;
}

await BeParsed.bootUp();
export { BeParsed };