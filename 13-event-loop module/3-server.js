const http = require('http')

// server is a function object that responds with a request
const server = http.createServer((req, res) => {
    console.log('request event')
    res.end('Hello world')
})
// the server is listening for a request here
server.listen(5000, ()=>{
    console.log('server listening on 5000-->')
})