import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    minLength: [3, "Name must contain at least 3 characters"],
    maxLength: [30, "Name cannot exceed 30 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    validate: [validator.isEmail, "please provide a Valid email"],
  },
  phone: {
    type: String,
    required: [true, "Please enter your phone number"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [8, "Password must contain at least 8 characters"],
    maxLength: [30, "Password cannot exceed 30 characters"],
  },
  role: {
    type: String,
    required: [true, "please provide your role"],
    enum: ["Job Seeker", "Employee"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

/// hashing the password
userSchema.pre("save", async () => {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});
