const ErrorHandler = require("../Utils/errorHandler");
const City = require("../Models/cityModel");
const catchAsyncErrors = require("../middleware/catchAsynError")


// Create new city => /api/v1/city/new
exports.newCity = catchAsyncErrors(async (req, res, next) => {
    const city = await City.create(req.body);

    res.status(201).json({
        success: true,
        city
    })
});

// Get all cities => /api/v1/cities
exports.getCities = catchAsyncErrors(async (req, res, next) => {
    const cities = await City.find();

    res.status(200).json({
        success: true,
        cities
    })
});

// Get single city details => /api/v1/city/:id
exports.getSingleCity = catchAsyncErrors(async (req, res, next) => {
    const city = await City.findById(req.params.id);

    if (!city) {
        return next(new ErrorHandler('City not found', 404));
    }

    res.status(200).json({
        success: true,
        city
    })
});


