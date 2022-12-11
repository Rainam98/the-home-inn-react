const express = require('express')
const router = express.Router()
const Property = require('../models/property')
const multer = require("multer")
var fs =require('fs')


var path = require('path')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/UTD/WPL/Final Project/the-home-inn-react/public/images')
  },
  filename: function (req, file, cb) {
  
   
    cb(null,  path.basename(file.originalname)) //Appending extension
  }
})

var upload = multer({ storage: storage });
// API for getting all the properties
// Eg request : GET http://localhost:9000/properties

router.get('/', async (req, res) => {
  try {
    const properties = await Property.find()
    res.json(properties)
    console.log("All properties fetched")

  } catch (err) {
    res.json({ message: 'Error' + err })
  }
})


// // API for getting property with specific ID
// // Eg request : GET http://localhost:9000/properties/63667a9add45f7b7e8762148

// router.get('/:id', async (req, res) => {
//   try {
//     const property = await Property.findOne({title:req.params.id})
//     console.log("Property fetched with title : " + req.params.id)
//     res.status(200).json(property)

//   } catch (err) {
//     res.status(404).json({ message: "No Property found with title : " + req.params.id })
//   }
// })


// API for deleting a specific property
// Eg request : DELETE http://localhost:9000/properties/63667a9add45f7b7e8762148

router.delete('/:id', async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id)
    res.json('Property deleted with id : ' + req.params.id);
  } catch (err) {
    res.json({ message: 'There was an issue deleting the property with id : ' + req.params.id })
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


router.post('/', upload.single('imgSrc'),async (req, res) => {

 const obj = JSON.parse(req.body.data);
 
  console.log(obj)
 
  const property = new Property({
    // _id: req.body._id,
    // imgSrc:  obj.imgSrc,
    title: obj.title,
    description: obj.description,
    nightlyFee: obj.nightlyFee,
    serviceFee: obj.serviceFee,
    cleaningFee: obj.cleaningFee,
    amenities: obj.amenities,
    bedRooms: obj.bedRooms,
    guests: obj.guests,
    availabilityFrom: obj.availabilityFrom,
    availabilityTo: obj.availabilityTo,
    propertyType: obj.propertyType,
    address: {
      city: obj.city,
      state: obj.state,
      country: obj.country
    }
  })


  try {
   
    const addedProperty = await property.save()
    console.log("New Property Added!!");
    
    
    fs.rename( '/UTD/WPL/Final Project/the-home-inn-react/public/images'+req.file.originalname, '/UTD/WPL/Final Project/the-home-inn-react/public/images'+addedProperty._id+'.jpg', function(err) {
      if ( err ) console.log('ERROR: ' + err);
  });
  property.imgSrc = '/UTD/WPL/Final Project/the-home-inn-react/public/images'+addedProperty._id+'.jpg';
  const finalddedProperty = await property.save()
    res.json(finalddedProperty)
  } catch (err) {
    res.json({ message: "There was an issue adding the property. Please try again later!!" })
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
    res.json({ message: "Property update failed for id : " + req.params.id })
  }
})


// API for getting all the properties of a host
// Eg request : GET http://localhost:9000/properties/myproperties?hostId=638f7bc5e8b8aa5b7dcf79c0

// router.get('/myproperties', async (req, res) => {
//   try {
//     console.log(req.query.hostId)
//     const properties = await Property.find({hostId:req.query.hostId})
//     // console.log(properties)
//     console.log(properties.length)
//     res.status(200).json(properties)
//     console.log("All properties fetched for host")

//   } catch (err) {
//     res.status(404).json({ message: 'Error' + err })
//   }
// })

// API for get property ID from title
// Eg request : POST http://localhost:9000/properties/title
/*
  Body:
  { 
    "title": "Sequoia Ridgetop Airbnb"
  }
*/


// router.post('/title', async (req, res) => {

//   Property.findOne({ title: req.body.title }).then(property => {

//     res.status(200).json({ propertyId: property._id })
//     console.log("Got the property Id")

//   })
//     .catch((error) => {
//       console.log(error)
//       res.status(404).json({ message: 'No property found with given title' })
//     })

// })

module.exports = router