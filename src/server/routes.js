'use strict';

var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');
var mailConfig = require('./mail/config');

router.get('/people', getPeople);
router.get('/person/:id', getPerson);
router.post('/send-email', sendEmail);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

function sendEmail(req, res, next) {
  // setup e-mail data with unicode symbols
  var mailOptions = {
    from: '" Test" <sergio.marcial@sergiomarcial.com>', // sender address
    to: 'sergiommarcial@gmail.com', // list of receivers
    subject: 'Hello ', // Subject line
    text: 'Hello world ', // plaintext body
    html: '<b>Hello world </b>' // html body
  };

  mailConfig.sendEmail(mailOptions);
}

function getPeople(req, res, next) {
  res.status(200).send(data.people);
}

function getPerson(req, res, next) {
  var id = +req.params.id;
  var person = data.people.filter(function(p) {
    return p.id === id;
  })[0];

  if (person) {
    res.status(200).send(person);
  } else {
    four0four.send404(req, res, 'person ' + id + ' not found');
  }
}
