const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  firstName: String,
  maidenName: String,
  lastName: String,
  gender: String,
  age: Number,
  email: String,
  birthDate: String,
  height: Number,
  weight: Number,
});

module.exports = mongoose.model("products", productSchema);
