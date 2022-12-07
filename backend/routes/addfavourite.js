const express = require('express')
const router = express.Router()
const Favourite = require('../models/favourites')


// API for getting all the reservation of a specific user
// Eg request : GET http://localhost:9000/favourites

router.post('/', params= async(req,res)=>{
    try{
      const allFavourites = await Favourite.findOne({userId:req.body.userId})
       console.log(allFavourites)
      var properties = []

      if(!allFavourites){
        properties.push(req.body.propertyId)
        const favouritesprops = new Favourite({
          
          userId: req.body.userId,
          propertyId:properties
          
        })
        console.log(favouritesprops)
        const addedfavourite = await favouritesprops.save()
        res.json(favouritesprops)
      }else{
      
        var properties= allFavourites.propertyId
          properties.push(req.body.propertyId)
        
       
       await allFavourites.save()
       res.json(allFavourites)
      }
    
     
  
    }catch(err){
      res.send("No favourites found for user with id : "+req.query.userId)
    }
  })

  
module.exports = router