const catchAsync = require("../utils/catchAsync");
const User = require("../model/userModel");
const generateOtp = require("../utils/generateOtp");

exports.signup = catchAsync(async (req, res, next) => {
  const { email, password, passwordConfirm, username } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) return next(new AppError("Email already registered", 400));

  const otp = generateOtp()

  const otpExpires = Date.now() * 24 * 60 * 60 * 1000; // 1 Day



});
