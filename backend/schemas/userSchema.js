const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true},
  phone: { type: Number, required: true },
  rating: Array,
  description: { type: String },
  needSitting: Array,
  doSitting: Array
})

module.exports = mongoose.model('User', userSchema);