const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itinerarySchema = new Schema({
  day: {
    type: String,
    required: true,
    trim: true,
    maxLength: [100, 'Day name cannot exceed 100 characters']
  },
  destinations: [
    {
      city: {
        type: String,
        required: [true, 'Please enter city name'],
        trim: true,
        maxLength: [100, 'City name cannot exceed 100 characters']
      },
      destination: {
        type: String,
        required: [true, 'Please enter destination name'],
        trim: true,
        maxLength: [100, 'Destination name cannot exceed 100 characters']
      },
      rating: {
        type: Number,
        required: [true, 'Please enter destination rating'],
        min: [0, 'Rating must be at least 0'],
        max: [5, 'Rating cannot exceed 5'],
        default: 0.0
      },
      images: {
        type: String,
        required: [true, 'Please enter destination image'],
      },
      lat: {
        type: Number,
        required: [true, 'Please enter destination latitude'],
      },
      lng: {
        type: Number,
        required: [true, 'Please enter destination longitude'],
      },
    }
  ],
});

module.exports = mongoose.model('Itinerary', itinerarySchema);
