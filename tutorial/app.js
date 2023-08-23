// CommonJS, todo arquivo é um módulo (by default)
// Modules - Código encapsulado (apenas compartilha o mínimo)
const { john, peter } = require('./4-names')
const sayHi = require('./5-utils')

sayHi('susan')
sayHi(john)
sayHi(peter)