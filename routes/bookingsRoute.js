const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
const Car = require("../models/carModel");
const { v4: uuidv4 } = require("uuid");

require('dotenv').config(); // ✅ Load environment variables FIRST

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/bookcar", async (req, res) => {
  const { token } = req.body;
  try {
    if (!req.body.car) {
      return res.status(400).send("Car ID is required.");
    }

    req.body.transactionId = token.id;

    const newbooking = new Booking(req.body);
    await newbooking.save();
    console.log("Booking saved");

    const car = await Car.findOne({ _id: req.body.car });
    if (!car) {
      return res.status(404).send("Car not found");
    }

    console.log("Found car:", car._id);

    if (!Array.isArray(car.bookedTimeSlots)) {
      car.bookedTimeSlots = [];
    }

    car.bookedTimeSlots.push(req.body.bookedTimeSlots);
    await car.save();

    res.send("Your booking is successful");
  } catch (error) {
    console.error("Booking failed:", error.message);
    return res.status(400).json({ message: "Something went wrong", error });
  }
});



router.get("/getallbookings", async(req, res) => {

    try {

        const bookings = await Booking.find().populate('car')
        res.send(bookings)
        
    } catch (error) {
        return res.status(400).json(error);
    }
  
});


module.exports = router;

