/**
 * Created by sergiomarcial on 7/3/16.
 */
'use strict';

var request = require('request');
// sign with default (HMAC SHA256)
var jwt = require('jsonwebtoken');
var config = require('../utils/config');

module.exports = {
  getToken: getToken
};

function getToken(req, res, next) {

  var token = jwt.sign({ foo: 'bar' }, config.secret, {
    expiresIn: 60 // expires in 24 hours
  });

  // return the information including token as JSON
  res.json({
    success: true,
    message: 'Enjoy your token!',
    token: token
  });

  return next;
}
