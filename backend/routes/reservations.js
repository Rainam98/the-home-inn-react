const express = require('express')
const router = express.Router()
const Reservation = require('../models/reservation')

// API for getting a reservation by reservation id
// Eg request : GET http://localhost:9000/reservations/636683d6dd45f7b7e8762172

router.get('/:id', async(req,res)=>{
  try{
    const reservation = await Reservation.findById(req.params.id)
    console.log("Reservation fetched for reservation id : " +req.params.id )
    res.json(reservation)

  }catch(err){
    res.json({message:"Reservation not found for reservation id : " +req.params.id})
    console.log(err)
  }
})

// API for creating a new reservation with userId passed as a query param
// Eg request : POST http://localhost:9000/reservations?userId=6365bb10dd45f7b7e8762184
/* 
  Body:
  {
    "hostId": "636683d6dd45f7b7e8762172",
    "propertyId": "636683d6dd45f7b7e8762172",
    "checkIn": "2022-11-20T19:44:27.336Z",
    "checkOut": "2022-11-20T19:44:27.336Z",
    "numberOfGuests": 3
  }
*/

router.post('/', async(req,res)=>{
  const reservation = new Reservation({
      guestId: req.query.userId,
      hostId: req.body.hostId,
      propertyId: req.body.hostId,
      checkIn: req.body.checkIn,
      checkOut: req.body.checkOut,
      numberOfGuests: req.body.numberOfGuests
  })

  try{
     const addedReservation=await reservation.save()
     console.log("New Reservation done!!");
     res.json(addedReservation)
  }catch(err){
      res.json({message:"There was an issue reserving the property. Please try again later!!"})
      console.log(err)
  }
})

// API for deleting a specific reservation
// Eg request : DELETE http://localhost:9000/reservations/637a933c7f270bc61bec8b43

router.delete('/:id', async(req, res)=>{
  try{
    const reservation =await Reservation.findByIdAndDelete(req.params.id)
    res.json('Reservation deleted with id : '+ req.params.id);
  }catch(err){
      res.json({message:'There was an issue deleting the reservation with id : '+ req.params.id})
      console.log(err)
  }
})

// API for getting all the reservation of a specific user
// Eg request : GET http://localhost:9000/reservations?userId=6365bb10dd45f7b7e8762184

router.get('/', params= async(req,res)=>{
  try{
    const allReservations = await Reservation.find({guestId:req.query.userId})
    console.log("Reservations fetched with for user with id : "+req.query.userId)
    res.json(allReservations)

  }catch(err){
    res.json({message:"No reservations found for user with id : "+req.query.userId})
  }
})

module.exports= router