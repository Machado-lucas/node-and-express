// GLOBALS

// __dirname - caminho do diretório atual
// __filename - nome do arquivo
// require - função para usar modules (CommonJS)
// module - informações sobre o modulo (arquivo) atual
// process - info sobre o env que o programa está sendo executado

console.log(__dirname)
setInterval(() => {
    console.log('hello world')
}, 1000)