# day-serial
Generate daily id

[![NPM version][npm-image]][npm-url] [![license](https://img.shields.io/github/license/mono-js/mono-utils.svg)](https://github.com/AlfieriChou/day-serial/blob/master/LICENSE) [![Greenkeeper badge](https://badges.greenkeeper.io/AlfieriChou/day-serial.svg)](https://greenkeeper.io/)

### example

```javascript
const serial = require('day-serial')

let a = serial()
console.log(a)	// A000020180511
```

### first update

* Supports head parameters

#### example

* no parameters
```javascript
const serial = require('day-serial')

let a = serial()
console.log(a)	// A000020180511
```

* parameters
```javascript
const serial = require('day-serial')

let head = 'ABC000'
let b = serial(head)
console.log(b)	// ABC00020180511

let a = serial('ABC000')
console.log(a)	// ABC00020180511
```

* ES6
```javascript
import serial from 'day-serial'

let a = serial()
console.log(a)	// A000020180511

let b = serial('ABC000')
console.log(b)	// ABC00020180511

let head = 'ABC000'
let c = serial(head)
console.log(c)	// ABC00020180511
```

[npm-image]: https://img.shields.io/npm/v/day-serial.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/day-serial