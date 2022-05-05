const express = require('express')
const app = express()
const router = express.Router()
const {
    getPeople,
    getPerson,
    insertPeoplePostman,
    updatePeople,
    deletePerson
}   = require('../controllers/people')




// GET request
router.get('/',getPeople) //getPeople
router.get('/:id',getPerson) //getPerson
//POST request
router.post('/postman',insertPeoplePostman)//insertPeoplePostman
// PUT request
router.put('/:id',updatePeople) //updatePeople
// DELETE request
router.delete('/:id',deletePerson)

module.exports = router