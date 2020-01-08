const express = require('express');
const User = require('../schemas/userSchema');
const router = express.Router();
const encryptPassword = require('../services/encryptPassword');

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
    password: encryptPassword(req.body.password),
  });

  if (save) {
    let error;
    let result = await save.save().catch(err => error = err);
    res.json(result || error);
    if (!error) {
    }
  }
});

/**
 * Delete a user
 */
router.delete('/api/user/:id', async (req, res) => {
  try {
    const userToDelete = await User.findById(req.session.user._id);
    res.send(userToDelete);
  }
  catch (e) {
    res.status(500).send();
  }
});

/**
 * Get a user by ID
 */
router.get('/api/user/:id', async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    res.json(user);
  } catch (e) {
    res.status(500).send({ status: 'error'})
  }
});

/**
 * Login an User
 */
router.post('/api/login', async (req, res) => {
  let { email, password } = req.body;
  password = encryptPassword(password);
  let user = await User.findOne({ email, password});
  if (user === null) {
    return res.status(401).send({ status: 'Du måste ha ett konto för att logga in !' });
  }
  if (user) { req.session.user = user };
  res.json(user ? user : { error: 'not found' });
});

/**
 * Check if the User is logged in
 */
router.get('/api/login', async (req, res) => {
  if (req.session.user) {
    let user = await User.findOne({ email: req.session.user.email })
       .exec().catch(err => {
        console.log(err)
      });
    req.session.user = user;
    res.json(req.session.user)
  } else {
    res.json({ status: 'not logged in' })
  }
});

/**
 * Logout an user
 */
router.delete('/api/login', async (req,res) => {
  let user = await User.findOne({ email: req.session.user.email })
  user.save()
  delete req.session.user;
  res.json({ status: 'logged out' });
});


module.exports = router;