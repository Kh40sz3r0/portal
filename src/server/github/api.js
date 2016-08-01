/**
 * Created by sergiomarcial on 7/4/16.
 */
'use strict';

var request = require('request');
var GitHubApi = require('github');
var config = require('../config');

module.exports = {
  getRepos: getRepos
};

function getRepos(req, res, next) {
  var github = new GitHubApi({
    // optional
    debug: true,
    protocol: config.gitProtocol,
    host: config.gitHost,
    pathPrefix: '',
    headers: {
      'user-agent': config.gitUserAgent
    },
    Promise: require('bluebird'),
    followRedirects: false,
    timeout: 5000
  });

  github.repos.getForOrg({
    org: config.gitOrg
  }, function(err, response) {
    res.status(200).send(response);
  });
  return next;
}
