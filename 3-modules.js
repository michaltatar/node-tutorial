// Modules
const { john, peter } = require('./4-names')
const sayHi = require('./5-utils')
const foo = require('./6-alternative-export')

require('./7-mind-grenade')

sayHi('Susan')
sayHi(john)
sayHi(peter)
