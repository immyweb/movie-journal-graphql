const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    unique: true,
  },

  lastName: {
    type: String,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
  },

  token: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
