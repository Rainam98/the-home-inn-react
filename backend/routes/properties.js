const express = require('express')
const router = express.Router()
const Property = require('../models/property')


// API for getting all the properties
// Eg request : GET http://localhost:9000/properties

router.get('/', async (req, res) => {
  try {
    const properties = await Property.find()
    res.json(properties)
    console.log("All properties fetched")

  } catch (err) {
    res.json({message:'Error' + err})
  }
})


// API for getting property with specific ID
// Eg request : GET http://localhost:9000/properties/63667a9add45f7b7e8762148

router.get('/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id)
    console.log("Property fetched with id : " + req.params.id)
    res.json(property)

  } catch (err) {
    res.json({message:"No Property found with id : " + req.params.id})
  }
})


// API for deleting a specific property
// Eg request : DELETE http://localhost:9000/properties/63667a9add45f7b7e8762148

router.delete('/:id', async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id)
    res.json('Property deleted with id : ' + req.params.id);
  } catch (err) {
    res.json({message:'There was an issue deleting the property with id : ' + req.params.id})
  }
})

// API for adding a new property
// Eg request : POST http://localhost:9000/properties/
/*
  Body:
  { 
    "imgSrc": "req.body.imgSrc",
    "title":"req.body.title",
    "description": "req.body.description",
    "nightlyFee": 1,
    "serviceFee": 1,
    "cleaningFee": 1,
    "amenities": "req.body.amenities",
    "bedRooms": 1,
    "guests": 1,
    "availabilityFrom": "2022-11-20T19:44:27.336Z",
    "availabilityTo": "2022-11-20T19:44:27.336Z",
    "hostId": 1,
    "address": "req.body.address"
  }
*/

router.post('/', async (req, res) => {
  const property = new Property({
    // _id: req.body._id,
    imgSrc: req.body.imgSrc,
    title: req.body.title,
    description: req.body.description,
    nightlyFee: req.body.nightlyFee,
    serviceFee: req.body.serviceFee,
    cleaningFee: req.body.cleaningFee,
    amenities: req.body.amenities,
    bedRooms: req.body.bedRooms,
    guests: req.body.guests,
    availabilityFrom: req.body.availabilityFrom,
    availabilityTo: req.body.availabilityTo,
    hostId: req.body.hostId,
    address: req.body.address
  })

  try {
    const addedProperty = await property.save()
    console.log("New Property Added!!");
    res.json(addedProperty)
  } catch (err) {
    res.json({message:"There was an issue adding the property. Please try again later!!"})
  }
})


// API Updating a specific property
// Eg request : PATCH http://localhost:9000/properties/637a89ba96a355c8b316f5bb
/*
  Body:
  { 
    "imgSrc": "Updated",
    "title":"Updated",
    "description": "Updated",
    "nightlyFee": 2,
    "serviceFee": 12,
    "cleaningFee": 2,
    "amenities": "Updated",
    "bedRooms": 2,
    "guests": 2,
    "availabilityFrom": "2021-11-20T19:44:27.336Z",
    "availabilityTo": "2021-11-20T19:44:27.336Z",
    "hostId": 1,
    "address": "Updated"
  }

  We can update all the fields or we can update only few fields as we want
*/

router.patch("/:id", async (req, res) => {
  try {
    const property = await Property.findOne({ _id: req.params.id })

    if (req.body.imgSrc) {
      property.imgSrc = req.body.imgSrc
    }

    if (req.body.title) {
      property.title = req.body.title
    }

    if (req.body.address) {
      property.address = req.body.address
    }

    if (req.body.description) {
      property.description = req.body.description
    }

    if (req.body.serviceFee) {
      property.serviceFee = req.body.serviceFee
    }

    if (req.body.cleaningFee) {
      property.cleaningFee = req.body.cleaningFee
    }

    if (req.body.nightlyFee) {
      property.nightlyFee = req.body.nightlyFee
    }

    if (req.body.amenities) {
      property.amenities = req.body.amenities
    }

    if (req.body.bedRooms) {
      property.bedRooms = req.body.bedRooms
    }

    if (req.body.guests) {
      property.guests = req.body.guests
    }

    if (req.body.availabilityFrom) {
      property.availabilityFrom = req.body.availabilityFrom
    }

    if (req.body.availabilityTo) {
      property.availabilityTo = req.body.availabilityTo
    }

    await property.save()
    console.log("Property updated with id : " + req.params.id);
    res.json(property)

  } catch {
    res.status(404)
    res.json({message:"Property update failed for id : " + req.params.id})
  }
})

module.exports = router