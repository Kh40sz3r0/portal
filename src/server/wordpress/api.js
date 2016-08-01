/**
 * Created by sergiomarcial on 7/2/16.
 */
'use strict';

var request = require('request');
var config = require('../config');

module.exports = {
  getPosts: getPosts
};

function getPosts(req, res, next) {
  var wordPressUrl = config.wordPressApiUrl + config.wordPressBlog + config.wordPressPosts;
  request({
    uri: wordPressUrl,
    method: 'GET'
  }, function (response, err, body) {
    if (err) {
      res.status(200).send(JSON.parse(body));
    } else {
      res.status(500).send(err);
    }
  });
  return next;
}
