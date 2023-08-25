const os = require('os')

// info sobre o usuario atual
const user = os.userInfo()

// metodo retorna o uptime do sistema em segundos
console.log(`O sistema está ativo há ${os.uptime()} segundos`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}
console.log(currentOS)