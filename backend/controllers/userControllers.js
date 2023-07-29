const ErrorHandler = require("../Utils/errorHandler");
const User = require("../Models/userModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
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
            message:`Your OTP for Reseting your Password is ${otp}`
        })
        res.status(200).json({
            success:true,
            message:`Email sent to ${user.email}`,
        })
     } catch (error) {
       user.otp = undefined ;
       await user.save({validateBeforeSave:false});
       return next(new ErrorHandler(error.message,500));
     }
});

//verify otp

exports.verifyotp = catchAsyncErrors(async (req, res, next) => {
    const { email} = req.body;
    const user = await User.findOne({
      email
    });

    let success=false;

    if(user.otp==otp){
        success = true;
    }

    res.status(200).json({
        success,
    })
})

  
  