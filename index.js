'use strict'

function serial (head) {
  let timeStr = ''
  let reg = /^\d$/
  let now = new Date()
  let m = now.getMonth() + 1
  let d = now.getDate()
  m = reg.test(m) ? '0' + m : m
  d = reg.test(d) ? '0' + d : d
  timeStr += now.getFullYear() + m + d
  let result = ''
  result = typeof (head) === 'undefined' ? 'A0000' + timeStr : head + timeStr
  return result
}

module.exports = serial
