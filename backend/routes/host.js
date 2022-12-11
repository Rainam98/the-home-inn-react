const express = require('express')
const router = express.Router()
const Property = require('../models/property')


// API for getting all the properties of a host
// Eg request : GET http://localhost:9000/host?hostId=638f7bc5e8b8aa5b7dcf79c0
router.get('/', async (req, res) => {
    try {
    //   console.log(req.query.hostId)
      const properties = await Property.find({hostId:req.query.hostId, status:true})
      // console.log(properties)
      console.log(properties.length)
      res.status(200).json(properties)
      console.log("All properties fetched in the host.js route")
  
    } catch (err) {
      res.status(404).json({ message: 'Error' + err })
    }
  }),



  // API for getting all the properties of a host
// Eg request : POST http://localhost:9000/host/delete
router.post('/delete', async (req, res) => {
    try {
      console.log(req.body.propertyId)
      const properties = await Property.findById(req.body.propertyId)
      console.log(properties)
      properties.status = false
      // console.log(properties)
      
      const updatedProperties = await properties.save();
      
      res.status(200).json(updatedProperties)
      console.log("All properties deleted in the host.js route")
  
    } catch (err) {
      res.status(404).json({ message: 'Error' + err })
    }
  })

module.exports = router