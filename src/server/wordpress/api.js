/**
 * Created by sergiomarcial on 7/2/16.
 */
'use strict';

var request = require('request');
var config = require('../utils/config');

module.exports = {
  getPosts: getPosts
};

function getPosts(req, res, next) {
  request({
    uri: 'https://public-api.wordpress.com/rest/v1.1/sites/kh40sz3r0.com/posts/',
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
