# day-serial
每天产生一条日期编号

[![NPM version][npm-image]][npm-url]

### 示例

```javascript
const serial = require('day-serial')

let a = serial()
console.log(a)	// A000020180511
```

## 第一次更新

* 支持自定义头部

#### 示例

* 不传参
```javascript
const serial = require('day-serial')

let a = serial()
console.log(a)	// A000020180511
```

* 传参
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
[npm-url]: https://www.npmjs.com/package/koa