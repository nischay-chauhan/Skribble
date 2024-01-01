import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';
import  Jwt  from 'jsonwebtoken';
import { sendResetEmail } from '../mailer/Mailer.js';
// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logged out successfully' });
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc    forgotPassword
// @route   POST /api/users/forgotPassword
// @access  Public
const forgotPassword = asyncHandler(async (req, res) => {
  const {email} = req.body;
  const user = await User.findOne({email});

  if(!user){
    res.status(404);
    throw new Error('User not found');
  }

  const resetToken = jwt.sign({userId : user._id},process.env.JWT_SECRET , {expiresIn : '1h'});

  user.resetPasswordToken = resetToken;
  user.resetPasswordTokenExpires = Date.now() + 60*60*1000
  await user.save();

  const resetLink = `http://localhost:5173/reset-password/${resetToken}`;

  try {
    await sendResetEmail(user.email , resetLink);
    res.json({message : 'Password reset email sent '});
  }catch (error) {
    console.error(error);
    res.status(500);
    throw new Error('Error sending password reset email');
  }

});

const resetPassword = async (req , res) => {
  const {resetToken} = req.params;
  const {password} = req.body;

  const user = await User.findOne({
    resetPasswordToken : resetToken,
    resetPasswordTokenExpires : {$gt : Date.now()}
  });

  if(!user){
    res.status(400);
    throw new Error('Invalid or expired Token');
  }

  user.password = password;
  user.resetPasswordToken = undefined;
  user.resetPasswordTokenExpires = undefined;
  await user.save();

  res.status(200).json({message : 'Password reset successfully'});

  }

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  forgotPassword,
  resetPassword,
};