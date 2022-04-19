// CommonJS, every file is a module by default
// Modules - Encapsulated Code (Shares minimum)
const names = require('./1-modules-2')
const sayHi = require('./1-modules-3')
const data = require('./1-modules-alt-way')
require('./1-mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
