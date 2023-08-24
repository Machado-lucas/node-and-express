const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
        return
    }
    if (req.url === '/about') {
        res.end('Welcome to our about page')
        return
    }
    res.end(`
    <h1>Oops!</h1>
    <p>Página não encontrada</p>
    <a href="/">Home</a>
    `)
})

server.listen(5000)