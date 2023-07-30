const express = require('express');
const router = express.Router();
const generateItinerary = require('../Utils/generateItinerary');
const Itinerary = require('../Models/itineraryModel'); // Import the Itinerary model

router.post('/generateItinerary', async (req, res) => {
  const days = req.body.days || 5; // Default to 5 days if days is not provided by the user
  const cityId = req.body.cityId || "64c51b553936d5188510f8e0";
  try {
    // Generate the itinerary based on the cities stored in the database
    const itineraryData = await generateItinerary(days,cityId);
    

    // Save the generated itinerary to the Itinerary collection in MongoDB
    const savedItinerary = await Itinerary.create(itineraryData);

    res.status(201).json({ message: 'Itinerary generated and saved successfully!', itinerary: savedItinerary });
  } catch (error) {
    res.status(500).json({
        error,  
        message: 'Error generating and saving the itinerary.' });
  }
});

module.exports = router;
