'use strict';

var router = require('express').Router();
// sign with default (HMAC SHA256)
var jwt = require('jsonwebtoken');
var fs = require('fs');

var four0four = require('./utils/404')();
var config = require('./utils/config');
var data = require('./data');
var wordpress = require('./wordpress/api');
var github = require('./github/api');
var authentication = require('./authentication/api');

router.get('/getToken', authentication.getToken);

router.use(function(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });
  }
});

router.get('/people', getPeople);
router.get('/person/:id', getPerson);
router.get('/github/repos', github.getRepos);
router.get('/wordpress/posts', wordpress.getPosts);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

function getPeople(req, res, next) {
  res.status(200).send(data.people);
}

function getPerson(req, res, next) {
  var id = +req.params.id;
  var person = data.people.filter(function (p) {
    return p.id === id;
  })[0];

  if (person) {
    res.status(200).send(person);
  } else {
    four0four.send404(req, res, 'person ' + id + ' not found');
  }
}
