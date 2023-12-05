import { BE, propDefaults, propInfo } from 'be-enhanced/BE.js';
import { XE } from 'xtal-element/XE.js';
import { register } from 'be-hive/register.js';
export class BeParsed extends BE {
    async attach(el, enhancementInfo) {
        super.attach(el, enhancementInfo);
        this.value = JSON.parse(el.innerHTML);
        this.resolved = true;
    }
}
const tagName = 'be-parsed';
const ifWantsToBe = 'parsed';
const upgrade = '*';
const xe = new XE({
    config: {
        tagName,
        isEnh: true,
        propDefaults: {
            ...propDefaults
        },
        propInfo: {
            ...propInfo,
        },
        actions: {}
    },
    superclass: BeParsed
});
register(ifWantsToBe, upgrade, tagName);
