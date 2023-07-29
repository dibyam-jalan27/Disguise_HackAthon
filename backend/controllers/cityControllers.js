const ErrorHandler = require("../Utils/errorHandler");
const City = require("../Models/cityModel");
const catchAsyncErrors = require("../middleware/catchAsynError")
//const City = require("../Models/cityModel");


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

exports.uploadimage = async (req, res, next) => {
    try {
      const { originalname, buffer } = req.file;
  
      // Find the user document based on the authenticated user's ID (req.user.id)
      const city = await City.findById(req.city.id);
  
      if (!city) {
        return res.status(404).json({ error: "City not found" });
      }
  
      // Update the avatar field in the user's document with the uploaded photo data
      city.image = {
        filename: originalname,
        description: "City photo",
        date: new Date(),
        data: buffer,
      };
  
      // Save the updated user document in the database
      await city.save();
  
      res.status(200).json({ message: "Image uploaded successfully" });
    } catch (error) {
      console.error("Error uploading Image:", error);
      res.status(500).json({ error: "Error uploading Image" });
    }
  };
  


