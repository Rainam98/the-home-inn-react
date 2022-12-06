const express = require('express')
const router = express.Router()
const User = require('../models/user')






// API for when user wishes to join as host  .
// Eg request : POST http://localhost:9000/login/



router.post('/', async (req, res) => {
    try {
        const user = await User.findOne({_id:req.body.userId})
        console.log("User fetched with id : " + req.body.userId)
        console.log(user.password)
        user.isHost= true
        await user.save()
        console.log("User updated with id : " + req.body.userId);
        res.json({message:"User added as host"})  
      
      } catch (err) {
        res.json({message:"No user found with id : " + req.body.userId})
      }
})



module.exports = router