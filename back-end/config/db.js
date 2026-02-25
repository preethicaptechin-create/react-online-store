const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.ipconfig/flushdnsoiii);
    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
