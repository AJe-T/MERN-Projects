import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minLength: [3, "first name must contain at least 3 characters!"],
    maxLength: [30, "first name can not exceed 30 characters"],
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minLength: [3, "last name must contain at least 3 characters!"],
    maxLength: [30, "last name can not exceed 30 characters"],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate: [validator.isEmail, "provide a valid Email"],
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    minLength: [10, "phone number must contains only 10 numbers"],
    maxLength: [10, "phone number must contains only 10 numbers"],
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
