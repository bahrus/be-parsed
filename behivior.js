import { register } from 'be-hive/register.js';
import { tagName } from './be-parsed.js';
import './be-parsed.js';
const ifWantsToBe = 'parsed';
const upgrade = '*';
register(ifWantsToBe, upgrade, tagName);
