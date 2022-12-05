const express = require('express')
const router = express.Router()
const User = require('../models/user')


// API for user sign up . First page for any user to register for our website
// Eg request : POST http://localhost:9000/usersignup/



router.post('/', async (req, res) => {
  const user = new User({
    firstName:req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    dob:req.body.dob,
    password:req.body.password,
    emailId:req.body.emailId,
    mobileNo:req.body.mobileNo,
    isHost:req.body.isHost
   
  })

  try {
    const addedUser = await user.save()
    console.log("New user Added!!");
    res.json(addedUser)
  } catch (err) {
    res.send("There was an issue adding the user. Please try again later!!")
  }
})


module.exports = router