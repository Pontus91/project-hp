const express = require('express');
const Sitting = require('../schemas/dogSittingSchema');
const router = express.Router();
const User = require('../schemas/userSchema');

/**
 * Create a Sitting
 */
router.post('/api/sitting', async (req, res) => {
  const newSitting = new Sitting({
    time: req.body.time,
    breed: req.body.breed,
    price: req.body.price,
    description: req.body.description,
  })
  newSitting.save(function (err) {
    if (err){
      console.log(err)
      next(err)
    } else {
      res.status(200).send()
      console.log(event, 'SAVED')
    }
  })
})

/**
 * Get all Sittings
 */
router.get('/api/sitting', async (req,res) => {
  Sitting.find({})
  .exec()
  .then(data => {
    res.status(200).send(data)
  });
});

/**
 * Find a sitting
 */
router.get('/api/sitting/id/:id', (req, res) => {
  const sitting = Sitting.findById(req.params.id)
    .exec()
    .then(data => {
      res.status(200).send(data)
    });
});

module.exports = router;