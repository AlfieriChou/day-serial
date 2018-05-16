const serial = require('./index')

const data = serial()
console.log(data)

const daySerial = serial('ABC000')
console.log(daySerial)

let head = 'ABC000'
const dateSerial = serial(head)
console.log(dateSerial)
