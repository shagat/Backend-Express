const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res
// 1. use vs route
// 2. our own middleware - express - third party 

//2.1 - using our own middleware
//app.use([logger, authorize])// for multiple authorize imports; they follow order of placements
//app.use(logger) //for sinlge middle import
// adding a path in 'app.use' with a routing path 
// will result in routes that invokes it
// only with the path suppose- app.use('/api',example)

//2.2 - using express middleware
//app.use(express.static('./public'))

//2.3 - using third party middleware
app.use(morgan('tiny'))
app.get('/',(req,res) => {
 res.send('Home Page').status(200)
})

app.get('/about',(req,res) => {
    res.send('About Page').status(200)
})

app.get('/api/products',(req,res) => {
    res.send('Products').status(200)
})
   
app.get('/api/items',(req,res) => {
    res.send('Items').status(200)
})
app.listen(5000, () =>{
    console.log('Server is listening in port nos. 5000....')
})
