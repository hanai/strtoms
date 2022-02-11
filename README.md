# strtoms

Convert string to milliseconds

## Install

```bash
$ npm i strtoms
```

## Usage

```js
const strtoms = require("strtoms");

strtoms("1ms"); // 1
strtoms("12s"); // 12000
strtoms("1h"); // 3600000
strtoms("1d"); // 86400000
```
