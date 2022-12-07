const express = require('express')
const router = express.Router()
const Favourite = require('../models/favourites')



// API for getting all the reservation of a specific user
// Eg request : GET http://localhost:9000/favourites?userId=6365bb10dd45f7b7e8762184

router.get('/', params= async(req,res)=>{
    try{
      const allFavourites = await Favourite.find({userId:req.query.userId})
      console.log("Favourites fetched with for user with id : "+req.query.userId)
      res.json(allFavourites)
  
    }catch(err){
      res.send("No favourites found for user with id : "+req.query.userId)
    }
  })
 



module.exports = router