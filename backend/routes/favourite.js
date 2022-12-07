const express = require('express')
const router = express.Router()
const Favourite = require('../models/favourites')



// API for getting all the favourites of a specific user
// Eg request : GET http://localhost:9000/favourites/view?userId=6365bb10dd45f7b7e8762184

router.get('/view', params= async(req,res)=>{
    try{
      const allFavourites = await Favourite.find({userId:req.query.userId})
      console.log("Favourites fetched with for user with id : "+req.query.userId)
      res.json(allFavourites)
  
    }catch(err){
      res.send("No favourites found for user with id : "+req.query.userId)
    }
  })
 



// API for adding favourites of a specific user
// Eg request : GET http://localhost:9000/favourite/add

router.post('/add', params= async(req,res)=>{
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

// API for removing favourite of a specific user
// Eg request : GET http://localhost:9000/favourites

router.post('/remove', params= async(req,res)=>{
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