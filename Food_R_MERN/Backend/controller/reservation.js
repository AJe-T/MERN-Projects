import { json } from "express";
import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body;
  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(new ErrorHandler("Please fill all the fields", 400));
  }

  try {
    await Reservation.create({ firstName, lastName, email, phone, time, date });
    res.status(201).json({
      success: true,
      message: "reservation sent successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const ValidationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(ValidationErrors.join(", "), 400));
    }
    return next(error);
  }
};

export default sendReservation;
