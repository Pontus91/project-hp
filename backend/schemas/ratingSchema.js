const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ratingSchema = new Schema ({
  rating: Number,
  receiver: { type: Schema.Types.ObjectId, ref: 'User'},
  rater: { type: Schema.Types.ObjectId, ref: 'User'},
  message: { type: String }
});

module.exports = mongoose.model('rating', ratingSchema);
