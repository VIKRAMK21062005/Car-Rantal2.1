const express = require("express");
const router = express.Router();
const Car = require("../models/carModel");

router.get("/getallcars", async (req, res) => {
  try {
    const cars = await Car.find();
    res.send(cars);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/addcar", async (req, res) => {
  try {
    const newcar = new Car(req.body);
    await newcar.save();
    res.send("Car added successfully");
  } catch (error) {
    console.log('Add Car Error:', error);
    return res.status(400).json(error);
  }
});

//routes/carsRoute.js

// router.post('/addcar', async (req, res) => {
//     try {
//         const newcar = new Car(req.body);
//         await newcar.save();
//         res.send('Car added successfully');
//     } catch (error) {
//         console.log('Add Car Error:', error);
//         res.status(500).send('Something went wrong');
//     }
// });



router.post("/editcar", async (req, res) => {
  try {
    const car = await Car.findOne({ _id: req.body._id });
    car.name = req.body.name;
    car.image = req.body.image;
    car.fuelType = req.body.fuelType;
    car.rentPerHour = req.body.rentPerHour;
    car.capacity = req.body.capacity;

    await car.save();

    res.send("Car details updated successfully");
  } catch (error) {
    return res.status(400).json({ message: error.message || "Something went wrong" });
  }
});

router.post("/deletecar", async (req, res) => {
  try {
    await Car.findOneAndDelete({ _id: req.body.carid });

    res.send("Car deleted successfully");
  } catch (error) {
    return res.status(400).json({ message: error.message || "Something went wrong" });
  }
});

module.exports = router;
