const mongoose = require("mongoose");

const itinerarySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter itinerary name"],
        trim: true,
        maxLength: [100, "Itinerary name cannot exceed 100 characters"],
    },
    userId : {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    destinations : [
        {
            name: {
                type: String,
                required: [true, 'Please enter destination name'],
                trim: true,
                maxLength: [100, 'Destination name cannot exceed 100 characters']
            },
            cityId: {
                type: mongoose.Schema.ObjectId,
                ref: "City",
                required: true,
            },
        }
    ],
    activities : [
        {
            name: {
                type: String,
                required: [true, 'Please enter activity name'],
                trim: true,
                maxLength: [100, 'Activity name cannot exceed 100 characters']
            },
            cityId: {
                type: mongoose.Schema.ObjectId,
                ref: "City",
                required: true,
            },
            landmark :{
                type: String,
                required: [true, 'Please enter landmark name'],
                trim: true,
            },
            Date: {
                type: Date,
                required: [true, 'Please enter date'],
            },
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Itinerary", itinerarySchema);
