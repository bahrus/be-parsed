# be-parsed

<!-- JSON-LD markup generated by Google Structured Data Markup Helper. -->

Parse a script tag that contains JSON.

[![Playwright Tests](https://github.com/bahrus/be-parsed/actions/workflows/CI.yml/badge.svg)](https://github.com/bahrus/be-parsed/actions/workflows/CI.yml)
[![NPM version](https://badge.fury.io/js/be-parsed.png)](http://badge.fury.io/js/be-parsed)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/be-parsed?style=for-the-badge)](https://bundlephobia.com/result?p=be-parsed)
<img src="http://img.badgesize.io/https://cdn.jsdelivr.net/npm/be-parsed?compression=gzip">

```html
<script type="application/ld+json" be-parsed>
{
  "@context" : "http://schema.org",
  "@type" : "Article",
  "name" : "How massive stars in binary systems turn into carbon factories",
  "author" : {
    "@type" : "Person",
    "name" : "Ken Croswell"
  },
  "articleSection" : "The next time you thank your lucky stars, you might want to bless the binaries. New calculations indicate that a massive star whose outer layer gets torn off by a companion star ends up shedding a lot more carbon than if the star had been born a loner. “That star is making about twice as much carbon as a single star would make,” says Rob Farmer, an astrophysicist at the Max Planck Institute for Astrophysics in Garching, Germany. All life on Earth is based on carbon, the fourth most abundant element in the cosmos, after hydrogen, helium and oxygen. Like nearly every chemical element heavier than helium, carbon is formed in stars (SN: 2/12/21). For many elements, astronomers have been able to pin down the main source. For example, oxygen comes almost entirely from massive stars, most of which explode, while nitrogen is made mostly in lower-mass stars, which don’t explode. In contrast, carbon arises both in massive and lower-mass stars. Astronomers would like to know exactly which types of stars forged the lion’s share of this vital element. Farmer and his colleagues looked specifically at massive stars, which are at least eight times heavier than the sun, and calculated how they behave with and without partners. Nuclear reactions at the core of a massive star first turn hydrogen into helium. When the core runs out of hydrogen, the star expands, and soon the core starts converting helium into carbon."
}
</script>
```

> [!Note]
> It is safest to include these tags before any loading of the be-parsed tag is loaded.  No attempt is made to wait for the entire JSON stream to finish loading before parsing what is inside the script tag.

The value of the parsed JSON is available via:

```JavaScript
const parsedVal = oScriptElement.beEnhanced.beParsed.value;
```

## Viewing Your Element Locally

Any web server that can serve static files will do, but...

1.  Install git.
2.  Fork/clone this repo.
3.  Install node.js
4.  Install python v3 or later.
5.  Open command window to folder where you cloned this repo.
6.  > npm install
7.  > npm run serve
8.  Open http://localhost:8000/demo/ in a modern browser.

## Running Tests

```
> npm run test
```

## Using from ESM Module:

```JavaScript
import 'be-parsed/be-parsed.js';
```

## Using from CDN:

```html
<script type=module crossorigin=anonymous>
    import 'https://esm.run/be-parsed';
</script>
```

