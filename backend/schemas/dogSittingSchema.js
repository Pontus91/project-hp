const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let dogSittingSchema = new Schema ({
  time: {type: Date, required: true},
  breed: {type: String, required: true},
  description: String
});

module.exports = mongoose.model('dogSitting', dogSittingSchema);