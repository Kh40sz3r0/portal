/**
 * Created by sergiomarcial on 7/2/16.
 */
(function () {
  'use strict';

  angular.module('app.dashboard')
    .factory('dashboardFactory', dashboardFactory);

  /* @ngInject */
  function dashboardFactory($http) {
    var service = {
      getWordpressPosts: getWordpressPosts,
      getGithubRepos: getGithubRepos
    };

    return service;

    function getGithubRepos(token) {
      var config = {headers: {'x-access-token': token}};
      return $http.get('http://localhost:3000/api/github/repos', config)
        .then(getReposSuccess)
        .catch(getReposFailure);
    }

    function getWordpressPosts(token) {
      var config = {headers: {'x-access-token': token}};
      return $http.get('http://localhost:3000/api/wordpress/posts', config)
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
