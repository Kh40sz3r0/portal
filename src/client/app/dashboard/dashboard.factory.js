/**
 * Created by sergiomarcial on 7/2/16.
 */
(function () {
  'use strict';

  angular.module('app.dashboard')
    .factory('dashboardFactory', dashboardFactory);

  /* @ngInject */
  function dashboardFactory($http, ENV_VAR, APP_CONFIG) {
    var service = {
      getWordpressPosts: getWordpressPosts,
      getGithubRepos: getGithubRepos
    };

    var env = ENV_VAR.ENV.toLowerCase();

    var server;
    if (env === 'local') {
      server = APP_CONFIG.server.local + APP_CONFIG.api.local;
    } else {
      server = APP_CONFIG.server.prod + APP_CONFIG.api.prod;
    }

    return service;

    function getGithubRepos(token) {
      var config = {headers: {'x-access-token': token}};
      return $http.get(server + '/github/repos', config)
        .then(getReposSuccess)
        .catch(getReposFailure);
    }

    function getWordpressPosts(token) {
      var config = {headers: {'x-access-token': token}};
      return $http.get(server + '/wordpress/posts', config)
        .then(getPostSuccess)
        .catch(getPostFailure);
    }

    function getReposSuccess(response) {
      return response;
    }

    function getReposFailure(err) {
      return err;
    }

    function getPostSuccess(response) {
      return response;
    }

    function getPostFailure(err) {
      return err;
    }
  }

})();
