const crypto = require('crypto');
const settings = require('../config/settings');

function encryptPassword(password) {
  return crypto.createHmac('sha256', settings.passwordSalt)
    .update(password).digest('hex');
}

module.exports = encryptPassword;