const express = require('express')
const router = express.Router()
const Property = require('../models/property')





router.get('/', async (req, res) => {
    try {
        var re = new RegExp(req.params.searchParam, 'i');
        console.log(re)
        const property = await Property.find( [{ city: { $regex: re } }, {title:{ $regex: re}}])
        res.send(property)  
      
      } catch (err) {
        res.send("No user found with id : ")
      }
})



module.exports = router