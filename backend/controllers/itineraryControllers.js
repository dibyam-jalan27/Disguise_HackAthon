const ErrorHandler = require("../Utils/errorHandler");
const Itinerary = require("../Models/itineraryModel");
const catchAsyncErrors = require("../middleware/catchAsynError")

// Create new Itinerary => /api/v1/Itinerary/new
exports.newItinerary = catchAsyncErrors(async (req, res, next) => {
    const itinerary = await Itinerary.create(req.body);

    res.status(201).json({
        success: true,
        itinerary
    })
});


