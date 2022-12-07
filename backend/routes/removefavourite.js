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
       
    
        res.json("User Id not present")
      }else{
      
        
}
        var properties= allFavourites.propertyId
        var index = properties.indexOf(req.body.propertyId);
        if (index !== -1) {
        properties.splice(index, 1);
        }
       
        
       
       await allFavourites.save()
       res.json(allFavourites)
      }
    
     
  
    catch(err){
      res.send("No favourites found for user with id : "+req.query.userId)
    }
  })

  
module.exports = router