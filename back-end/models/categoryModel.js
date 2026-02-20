// const mongoose = require("mongoose");

// const categorySchema = new mongoose.Schema({
//   name: String
// });

// module.exports = mongoose.model("Category", categorySchema);



const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);