'use strict'

var id = require('identity-function')

module.exports.map = function map (fn) {
  if (!fn) return id
  fn = prop(fn)
  return function (read) {
    return function (abort, cb) {
      read(abort, function (end, data) {
        try {
          data = !end ? fn(data) : null
        } catch (err) {
          return read(err, function () {
            return cb(err)
          })
        }
        cb(end, data)
      })
    }
  }
}

// TODO extract into separate module
function prop (key) {
  return (
  typeof key === 'string'
    ? function (data) { return data[key] }
    : typeof key === 'object' && typeof key.exec === 'function' // regexp
      ? function (data) {
        var v = key.exec(data)
        return v && v[0]
      }
      : key
  )
}
