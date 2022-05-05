const express = require('express')
const router = express.Router()
const app = express()
// static assets
app.use(express.static('./methods-public'))
// parse form data and parse json
app.use(express.urlencoded({extended:false})).use(express.json())

let {people} = require('../data')

const getPeople =  (req,res) => {
    res.status(200).send({success: true, data: people})
}
const getPerson =  (req,res) => {
    const person = people.find((person)=>person.id === Number(req.params.id))
    if(!person){
        return res
        .status(404)
        .json({success:false, msg:`No data with the same id: ${req.params.id}`})
    }
    const newPerson = people.find(
        (person) => person.id === Number(req.params.id)
        )
        return res.status(201).json({success: true, data: newPerson})
}
const insertPeoplePostman = (req,res) => {
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:'Please provide name value'})
    }
    res.status(201).json({success: true, data:[...people, name]})
}
const updatePeople = (req,res) => {
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person)=>person.id === Number(id))
    if(!person){
        return res.status(404).json({success:false, msg:`No data with the same id: ${id}`})
    }
    const newPeople =people.map((person)=>{
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    return res.status(201).json({success: true, data: newPeople})
}
const deletePerson = (req,res) => {
    const person = people.find((person)=>person.id === Number(req.params.id))
    if(!person){
        return res
        .status(404)
        .json({success:false, msg:`No data with the same id: ${req.params.id}`})
    }
    const newPeople = people.filter(
        (person) => person.id !== Number(req.params.id)
        )
    return res.status(201).json({success: true, data: newPeople})
}

module.exports = {
    getPeople,
    getPerson,
    insertPeoplePostman,
    updatePeople,
    deletePerson
}