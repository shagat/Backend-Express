const express =require ('express')
const app = express()
const path = require('path')

//setup static and middleware
app.use(express.static('./public'))

// The below can be done  alternatively by dumping 
//the whole ./navbar-app/index.html page->public
//
//index page
// app.get('/', (req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

//for all other resources
app.all('*',(req,res)=>{
    res.status(400).send('Page not found')
})

//server listen
app.listen(5000,()=>{
    console.log('Server is listening on port on 5000....')
})

// app.get('/',(req, res) => {
//     console.log('user hit the server')
//     res.status(200).send('Home Page')
// })
// app.get('/about',(req,res) => {
//     console.log('user hit the server')
//     res.status(200).send('About Page')
// })
// app.all('*', (req,res) => {
//     res.status(404).send('<h1>Page not found!</h1>')
// })
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen