const express = require('express')
const app = express()
const people = require('./routes/people')
const auth = require('./routes/auth')
// static assets
app.use(express.static('./methods-public'))

// parse form data and parse json
app.use(express.urlencoded({extended:false})).use(express.json())

//use exported routes
app.use('/api/people',people)
app.use('/login',auth)


app.listen(5000, () =>{
    console.log('Server is listening in port nos. 5000....')
})
