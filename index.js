'use strict'

function serial (head) {
  let timeStr = ''
  let result
  let reg = /^\d$/
  let now = new Date()
  let mouth = reg.test(now.getMonth() + 1) ? '0' + now.getMonth() + 1 : now.getMonth() + 1
  let day = reg.test(now.getDate()) ? '0' + now.getDate() : now.getDate()
  timeStr += now.getFullYear() + mouth + day
  return result = typeof (head) === 'undefined' ? 'A0000' + timeStr : head + timeStr
}

module.exports = serial
