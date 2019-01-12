# Check Url Type

[![](https://data.jsdelivr.com/v1/package/npm/check-url-type/badge)](https://www.jsdelivr.com/package/npm/check-url-type)

It's a pure javascript library for checking url content-types and so on. It is also a node.js module. Check is url an image, an html file, etc.

## Installation

use npm
```bash
$ npm i check-url-type
```
or include this in your html
```html
<script src="https://cdn.jsdelivr.net/npm/check-url-type/index.js"></script>
```

## Usage

```js
//in node.js:
const check_url_type = require('check-url-type');
var type = check_url_type.get_type('url');

//in browser:
var type = check_url_type.get_type('url');
```
