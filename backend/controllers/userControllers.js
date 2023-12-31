const ErrorHandler = require("../Utils/errorHandler");
const User = require("../Models/userModel");
const City = require("../Models/cityModel");
const catchAsyncErrors = require("../middleware/catchAsynError")
const sendToken = require("../Utils/jwtToken.js");
const sendEmail = require("../Utils/sendEmail");
const crypto = require("crypto");

// Register a user => /api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password,
    });
  
    sendToken(user, 201, res);
});

// Login User => /api/v1/login
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
  
    // Checks if email and password is entered by user
    if (!email || !password) {
      return next(new ErrorHandler("Please enter email & password", 400));
    }
  
    // Finding user in database
    const user = await User.findOne({ email }).select("+password");
  
    if (!user) {
      return next(new ErrorHandler("Invalid Email or Password", 401));
    }
  
    // Checks if password is correct or not
    const isPasswordMatched = await user.comparePassword(password);
  
    if (!isPasswordMatched) {
      return next(new ErrorHandler("Invalid Email or Password", 401));
    }
  
    sendToken(user, 200, res);
  });

  // Logout user => /api/v1/logout
exports.logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
  
    res.status(200).json({
      success: true,
      message: "Logged out",
    });
  });

  //Forgot password => /api/v1/forgotpassword
  exports.forgotpassword = catchAsyncErrors(async (req, res, next) => {
    const { email} = req.body;
    const user = await User.findOne({
      email
    });
    
    if(!user){
        return next(new ErrorHandler("User not found with this email",404))
    }


    const otp = Math.floor(100000 + Math.random() * 900000);
     user.otp=otp;
     await user.save({validateBeforeSave:false});

     try {
        await sendEmail({
            email:user.email,
            subject:"OTP Verification",
            text:`Your OTP for Reseting your Password is ${otp}`
        })
        res.status(200).json({
            success:true,
            message:`Email sent to ${user.email}`,
        })
     } catch (error) {
      
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
       user.otp = undefined ;
       await user.save({validateBeforeSave:false});
       return next(new ErrorHandler(error.message,500));
     }
});

//verify otp
exports.verifyotp = catchAsyncErrors(async (req, res, next) => {
    const { email,otp} = req.body;
    const user = await User.findOne({
      email
    });

    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });


    if(user.otp!=otp){
        return next(new ErrorHandler("OTP is not correct",404))
    }

    res.status(200).json({
        success : true,
        token : resetToken,
    })
})

// Reset Password => /api/v1/password/reset/:token
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
  // Hash URL token
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

    console.log(resetPasswordToken)
  const user = await User.findOne({
    resetPasswordToken,
  });

  if (!user) {
    return next(
      new ErrorHandler(
        "Password reset token is invalid or has been expired",
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password does not match", 400));
  }

  // Setup new password
  user.password = req.body.password;

  user.otp = undefined;

  await user.save();

  sendToken(user, 200, res);
});

  
//Get currently logged in user details => /api/v1/me
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({
    success: true,
    user,
  });
});

exports.getUserCities = catchAsyncErrors(async (req, res, next) => {
  const userId = req.params.userId;
  const user = await User.findById(userId);
  res.json(user.cities);
})

exports.updateCities = catchAsyncErrors(async (req, res, next) => {
  const { cityId } = req.body;
  const userId = req.params.userId;

  // Update the user's wishlist array with the new cityId
  const user = await User.findById(userId);
  const city = await City.findById(cityId);
  user.cities.push({city_id: cityId,name: city.name, images: city.images, description: city.description})

  await user.save();
  res.status(200).json({
    success: true,
  });
})

exports.deleteCity = catchAsyncErrors(async (req, res, next) => {
  const {userId, cityId} = req.params;
  
  const user = await User.findById(userId);
  const city = await City.findById(cityId);
  const idToRemove = city.name;
  const indexToRemove = user.cities.findIndex((item) => item.name === idToRemove);
  
  if (indexToRemove !== -1) {
    user.cities.splice(indexToRemove, 1);
  }
  console.log(user.cities);
  await user.save();

  res.status(200).json({
    success: true,
  });
})

exports.getUserItinerary = catchAsyncErrors(async (req, res, next) => {
  const userId = req.params.userId;
  const user = await User.findById(userId).populate('cities.city_id');
  res.json(user.itinerary);
})

exports.updateItinerary = catchAsyncErrors(async (req, res, next) => {
  const { itineraryId } = req.body;
  const userId = req.params.userId;

  // Update the user's wishlist array with the new cityId
  await User.findByIdAndUpdate(userId, { $addToSet: { itinerary: { itinirary_id: itineraryId } } });

  res.status(200).json({
    success: true,
  });
})
