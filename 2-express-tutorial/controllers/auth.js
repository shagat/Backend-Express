const express = require('express')
const router = express.Router()
const app = express()

const auth = (req,res)=>{
    const {name} = req.body
    if (name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.send('Please provide name! ').status(401)
}
module.exports = auth