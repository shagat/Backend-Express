const Task = require('../models/task')
const getAllTasks = (req,res) => {
    res.send('Get all tasks')
}

const createTask = async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const getSingleTask = (req,res) => {
    res.json({id:req.params.id})
}

const updateTask = (req,res) => {
    res.send(' Update existing task')
}

const deleteTask = (req,res) => {
    res.send(' Delete a task')
}


module.exports = {
    getAllTasks,createTask,getSingleTask,
    updateTask,deleteTask,}