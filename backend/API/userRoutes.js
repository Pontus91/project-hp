const express = require('express');
const User = require('../schemas/userSchema');
const router = express.Router();

/**
 * Get all users
 */
router.get('/api/users', async (req, res) => {
  User.find({})
    .exec()
    .then(data => {
      res.status(200).send(data);
    })
});

/**
 * Create a user
 */
router.post('/api/user', async (req, res) => {
  let save;
  save = new User({
    ...req.body,
    password: req.body.password,
  });

  if (save) {
    let error;
    let result = await save.save().catch(err => error = err);
    res.json(result || error);
    if (!error) {
    }
  }
})

module.exports = router;