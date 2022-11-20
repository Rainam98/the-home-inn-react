const mongoose = require('mongoose')


const propertiesSchema = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true
    },
    imgSrc: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    nightlyFee: {
        type: Number,
        required: true
    },
    serviceFee: {
        type: Number,
        required: true
    },
    cleaningFee: {
        type: Number,
        required: true
    },
    amenities: {
        type: String,
        required: true
    },
    bedRooms: {
        type: Number,
        required: true
    },
    guests: {
        type: Number,
        required: true
    },
    availabilityFrom: {
        type: Date,
        required: true
    },
    availabilityTo: {
        type: Date,
        required: true
    },
    address: {
        type: Object,
        required: true
    }

})

module.exports = mongoose.model('Properties',propertiesSchema)