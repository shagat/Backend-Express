const { readFileSync } = require('fs')
const http = require('http')
const server = http.createServer((req, res) => {
const homePage = readFileSync('./navbar-app/index.html')
const homePagelogo = readFileSync('./navbar-app/logo.svg')
const homePagestyles = readFileSync('./navbar-app/styles.css')
const homePagelogic = readFileSync('./navbar-app/browser-app.js')
    const url = req.url
    //Home page
    if (req.url === '/'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    //About page
    else if (req.url === '/about'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>About page</h1>')
        res.end()
    }
    //logo-homepage
    else if (req.url === '/logo.svg'){
        res.writeHead(200, {'content-type':'image/svg+xml'})
        res.write(homePagelogo)
        res.end()
    }
    //logic-homepage
    else if (req.url === '/browser-app.js'){
        res.writeHead(200, {'content-type':'text/javascript'})
        res.write(homePagelogic)
        res.end()
    }
    //styles-homepage
    else if (req.url === '/styles.css'){
        res.writeHead(200, {'content-type':'text/css'})
        res.write(homePagestyles)
        res.end()
    }
    //404
    else {
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h2>Page not found</h2>')
        res.end()
    }
})
server.listen(5000)