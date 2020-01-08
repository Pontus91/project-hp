const express = require('express');
const Rating = require('../schemas/ratingSchema');
const router = express.Router();
const User = require('../schemas/userSchema');

/**
 * Get all ratings
 */
router.get('/api/ratings', async (req,res) => {
  await Rating.find({})
  .exec().then(data => {
    res.send(data);
  });
});

/**
 * User gives a rating
 */
router.post('/api/ratings', async (req,res) => {
  let receiver = await User.findById(req.body.receiver);
  let rater = await User.findById(req.body.rater);

  if(!receiver || !rater){
    res.send('Användaren inte hittad')
    return
  }

  if(req.body.rating < 1 && req.body.rating > 5){
    res.send('Ditt betyg måste vara mellan 1 och 5 stjärnor');
    return
  }

  let newRating = new Rating({
    ...req.body
  })

  let result = await newRating.save().catch(error => {
    console.log(error)
  })

  newRating.push(receiver.rating);
  receiver.rating = receiver.rating / receiver.rating.length;
  receiver.save();
  rater.save();
  res.json(result || error)
});