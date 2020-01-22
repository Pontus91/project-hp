const express = require('express');
const Sitting = require('../schemas/dogSittingSchema');
const router = express.Router();
const User = require('../schemas/userSchema');

/**
 * Create a Sitting
 */
router.post('/api/sitting', async (req, res) => {
  const newSitting = new Sitting({
    date: req.body.date,
    time: req.body.time,
    breed: req.body.breed,
    description: req.body.description,
    city:  req.body.city,
    sitterFound: false,
    owner: req.session.user.email,
  })
  if (req.session.user) {
    if (newSitting) {
      let user = await User.findOne({ email: req.session.user.email })
      let error;
      let result = await newSitting.save().catch(err => error = err);
      res.json(result || error);
      user.needSitting.push(result);
      user.save();
      if (!error) {
      }
    }
  }

})

/**
 * Get all Sittings
 */
router.get('/api/sitting', async (req, res) => {
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

/**
 * Delete a sitting
 */
router.delete('/api/sitting/:id', async (req, res) => {
  const sittingToDelet = await Sitting.findById(req.params.id);
  sittingToDelet.delete(function (err) {
    if(err){
      next(err)
    } else {
      res.status(200).send();
    }
  })
})

/**
 * Get sittings for specific user
 */
router.get('/api/sitting/user', async (req, res) => {
  if(req.session.user){
    let user = await User.findOne({ email: req.session.user.email })
    res.json(user.needSitting);
  }
})

/**
 * Edit specific sitting
 */
router.put('/api/sitting/edit/:id', async (req, res) => {
  let sitting = await Sitting.findById(req.params.id)
  sitting.sitterFound = req.body.sitterFound;
  if(sitting){
    let error;
    let result = await sitting.save().catch(err => error = err);
    res.json(result || error);
    if (!error) {
    }
  }
})

/**
 * Add a sitting to a user
 */
router.put('/api/sitting/add/:id', async (req, res) => {
  let sitting = await Sitting.findById(req.params.id);
  let user = await User.findOne({ email: req.body.test })
  user.doSitting.push(sitting);
  let error;
  let result = await user.save().catch(err => error = err);
  res.json(result || error);
})

module.exports = router;