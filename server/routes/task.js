const express = require('express')
const router = express.Router();
const task = require('../models/task')
const auth = require('../models/auth')

router.get('/read/:user',async (req,res)=>{
    const notes = await task.find({user:req.params.user})
    res.json(notes)
})

router.post('/add', async (req,res)=>{

    const {title,desc, user} = req.body;

    const tasks = new task({
        title,desc,user
    })

    const savedTask = await tasks.save()

    res.json(savedTask)

})


module.exports = router