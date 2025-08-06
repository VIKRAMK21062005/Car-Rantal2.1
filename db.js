// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();

// function connectDB() {
//     console.log("MONGO_URLS:", process.env.MONGO_URL); // Debugging

//     mongoose.connect(process.env.MONGO_URL, {
//         useUnifiedTopology: true,
//         useNewUrlParser: true,
//     });

//     const connection = mongoose.connection;

//     connection.on("connected", () => {
//         console.log("Mongo DB Connection Successful");
//     });

//     connection.on("error", (err) => {
//         console.log("Mongo DB Connection Error", err);
//     });
// }

// connectDB();

// module.exports = mongoose;

const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

async function connectDB() {
  console.log("MONGO_URL:", process.env.MONGO_URL);

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("✅ MongoDB Connection Successful");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }

  // Listen to low-level connection errors too
  mongoose.connection.on("error", (err) => {
    console.error("🔥 Mongoose connection error:", err.message);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("⚠️ Mongoose disconnected");
  });
}

connectDB();

module.exports = mongoose;
