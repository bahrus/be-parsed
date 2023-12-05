import {BE, propDefaults, propInfo} from 'be-enhanced/BE.js';
import {BEConfig, EnhancementInfo} from 'be-enhanced/types';
import {XE} from 'xtal-element/XE.js';
import {Actions, AllProps, AP, PAP, ProPAP, POA} from './types';
import {register} from 'be-hive/register.js';

export class BeParsed extends BE<AP, Actions, HTMLScriptElement> implements Actions{
    override async attach(el: HTMLScriptElement, enhancementInfo: EnhancementInfo) {
        super.attach(el, enhancementInfo);
        this.value = JSON.parse(el.innerHTML);
        this.resolved = true;
    }

}

export interface BeParsed extends AllProps{}

const tagName = 'be-parsed';
const ifWantsToBe = 'parsed';
const upgrade = '*';

const xe = new XE<AP, Actions>({
    config: {
        tagName,
        isEnh: true,
        propDefaults: {
            ...propDefaults
        },
        propInfo: {
            ...propInfo,

        },
        actions:{}
    },
    superclass: BeParsed
});

register(ifWantsToBe, upgrade, tagName);