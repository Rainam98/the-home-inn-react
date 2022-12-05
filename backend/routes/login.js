const express = require('express')
const router = express.Router()
const User = require('../models/user')



// API for user login . Login with email and password
// Eg request : POST http://localhost:9000/login/



router.post('/', async (req, res) => {
    try {
        const user = await User.findOne({emailId:req.body.emailId})
        console.log("User fetched with id : " + req.body.emailId)
        console.log(user.password)
        
        if (user.password === req.body.password) {
        res.json(user)
        }else{
            res.send("Incorrect password")
        }
      } catch (err) {
        res.send("No user found with id : " + req.body.emailId)
      }
})


module.exports = router