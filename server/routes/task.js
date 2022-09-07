const express = require('express')
const router = express.Router();
const task = require('../models/task')
const auth = require('../models/auth')

router.get('/read/:user',async (req,res)=>{
    const notes = await task.find({user:req.params.user})
    res.json(notes)
})

router.put('/update/:id',async (req, res)=>{
    // const updatedtasks = await task.findById(req.params.id)
    const updatedtasks = await task.findByIdAndUpdate(req.params.id, {status:false})
    res.json(updatedtasks)
})

router.post('/add', async (req,res)=>{

    const {title,desc, user} = req.body;

    const tasks = new task({
        title,desc,user
    })

    const savedTask = await tasks.save()

    res.json(savedTask)

})

router.delete('/del/:id', async (req, res)=>{
    const deletedTask = await task.findByIdAndDelete(req.params.id)
    res.json(deletedTask)
})


module.exports = router