/**
 * Created by sergiomarcial on 7/4/16.
 */
'use strict';

var request = require('request');
var GitHubApi = require("github");
var config = require('../utils/config');

module.exports = {
  getRepos: getRepos
};

function getRepos(req, res, next) {
  var github = new GitHubApi({
    // optional
    debug: true,
    protocol: "https",
    host: "api.github.com", // should be api.github.com for GitHub
    pathPrefix: "", // for some GHEs; none for GitHub
    headers: {
      "user-agent": "sergiomarcial-portal" // GitHub is happy with a unique user agent
    },
    Promise: require('bluebird'),
    followRedirects: false, // default: true; there's currently an issue with non-get redirects, so allow ability to disable follow-redirects
    timeout: 5000
  });

  github.repos.getForOrg({
    org: "sergiomarcial"
  }, function(err, response) {
    res.status(200).send(response);
  });
  return next;
}
