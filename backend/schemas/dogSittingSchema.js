const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let dogSittingSchema = new Schema({
  date: { type: String, require: true },
  time: { type: String, required: true },
  breed: { type: String, required: true },
  description: String,
  sitterFound: false,
  city: { type: String, require: true }
});

module.exports = mongoose.model('dogSitting', dogSittingSchema);