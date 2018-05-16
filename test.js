const serial = require('./index')

const data = serial()
console.log(data)

let head = 'ABC000'
const dateSerial = serial(head)
console.log(dateSerial)
