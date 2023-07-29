const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter city name'],
        trim: true,
        maxLength: [100, 'City name cannot exceed 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Please enter city description'],
    },
    rating: {
        type: Number,
        required: [true, 'Please enter city rating'],
        maxLength: [5, 'City rating cannot exceed 5 characters'],
        default: 0.0
    },
    images: {
        type: String,
        required: [true, 'Please enter city image'],
    },
    lat:{
        type: Number,
        required: [true, 'Please enter city latitude'],
    },
    lng:{
        type: Number,
        required: [true, 'Please enter city longitude'],
    },
    destination :[
        {
            name: {
                type: String,
                required: [true, 'Please enter destination name'],
                trim: true,
                maxLength: [100, 'Destination name cannot exceed 100 characters']
            },
            rating: {
                type: Number,
                required: [true, 'Please enter destination rating'],
                maxLength: [5, 'Destination rating cannot exceed 5 characters'],
                default: 0.0
            },
            images: {
                type: String,
                required: [true, 'Please enter destination image'],
            },
            lat:{
                type: Number,
                required: [true, 'Please enter destination latitude'],
            },
            lng:{
                type: Number,
                required: [true, 'Please enter destination longitude'],
            },
        }
    ],
});


module.exports = mongoose.model('City', citySchema);