const express = require('express')
const auth = require('../models/auth')
const {body, validationResult} = require('express-validator')
const router = express.Router()
const bcrypt = require('bcryptjs')


router.post('/createuser',
// Validation starts
    body('username').isLength({min:3}),
    body('password').isLength({min:3})
    ,async (req,res)=>{

        // using express validator
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }

        try{

            
            // if username already exists
            let user = await auth.findOne({username: req.body.username})
            if (user){
                return res.status(400).json({error:"Sorry the username already exists."})
        }

        // Validation ends
        
        // encrypt the password
        const salt = await bcrypt.genSalt(10);
        const secured_pass = await bcrypt.hash(req.body.password, salt);
        
        const createUser = await auth.create({
            username: req.body.username,
            password: secured_pass
        })

        res.json({status: 'success', username: req.body.username}).status(200)
    }

    catch (err){
        res.json({error:err})
    }
        
})


router.post('/login', async (req,res)=>{

    // Validation starts
    const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
    // Validation ends
        
        let user = await auth.findOne({username:req.body.username})
        if (!user){
            return res.status(400).json({error:"Please enter correct credentials"})
        }

        const passwordCompare = await bcrypt.compare(req.body.password,user.password)
        if(!passwordCompare){
            return res.status(400).json({error:"Please enter correct credentials"})
        }


        res.json({status:passwordCompare, username: req.body.username})

})



module.exports = router