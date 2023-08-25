// npm - global command, vem com o node
// npm --version ou --v, checa a versão do npm

// dependencia local - use apenas em projetos específicos
// npm i <packageName>

// dependencia global - use em qualquer projeto
// npm install -g <packageName>
// sudo npm install -g <packageName> (linux/mac)

// package.json - arquivo de manifesto (armazena infos importantes sobre o projeto/package)
// método manual (cria o package.json na raiz, cria as propriedades etc)
// npm init (passo a passo, Enter para skippar)
// npm init -y (tudo default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
console.log('hello')