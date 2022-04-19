const http = require('http')

//Using event emitter apis
const server = http.createServer()
//emits request event
//respond to it
server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(5000)