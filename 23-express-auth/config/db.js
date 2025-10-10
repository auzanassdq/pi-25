const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    const connectionString = "";
    await mongoose.connect(connectionString);
    console.log("Successfully connected to MongoDB.");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectToDb;