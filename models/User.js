const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      min: 6,
      max: 20,
      default: "",
    },
    lastname: {
      type: String,
      require: true,
      min: 6,
      max: 20,
      default: "",
    },
    gender: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      require: true,
      min: 6,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
    },
    phone: {
      type: String,
      require: true,
      min: 10,
      max: 12,
      unique: true
    },
    location: {
      type: String,
      min: 10,
      max: 30,
      default: "",
    },
    avatar: {
      type: String,
      default: "https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg",
    },
    isAdmin: {
      type: Boolean
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
