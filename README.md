# day-serial
每天产生一条日期编号

### 示例

```javascript
const serial = require('day-serial')

let a = serial()
console.log(a)	// A000020180511
```

## 第一次更新

* 支持自定义头部

#### 示例

```javascript
const serial = require('day-serial')

let a = serial('ABC000')
console.log(a)	// ABC00020180511
```