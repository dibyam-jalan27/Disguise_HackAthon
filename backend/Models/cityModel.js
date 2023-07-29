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
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    destination :[
        {
            name: {
                type: String,
                required: [true, 'Please enter destination name'],
                trim: true,
                maxLength: [100, 'Destination name cannot exceed 100 characters']
            },
            description: {
                type: String,
                required: [true, 'Please enter destination description'],
            },
            rating: {
                type: Number,
                required: [true, 'Please enter destination rating'],
                maxLength: [5, 'Destination rating cannot exceed 5 characters'],
                default: 0.0
            },
            images: [
                {
                    public_id: {
                        type: String,
                        required: true
                    },
                    url: {
                        type: String,
                        required: true
                    }
                }
            ],
        }
    ],
});


module.exports = mongoose.model('City', citySchema);