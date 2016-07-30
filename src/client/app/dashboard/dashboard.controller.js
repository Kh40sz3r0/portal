(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardController', ['$q', 'logger', 'securityFactory',
      'dashboardFactory', DashboardController]);

  /* @ngInject */
  function DashboardController($q, logger, securityFactory, dashboardFactory) {
    var vm = this;
    vm.news = {
      title: 'Portal',
      description: 'Portal .'
    };
    vm.title = 'Dashboard';

    activate();

    securityFactory.getToken().then(function (response) {
      dashboardFactory.getWordpressPosts(response.data.token)
        .then(getPostsSuccess)
        .catch(getPostFailure);
      dashboardFactory.getGithubRepos(response.data.token)
        .then(getReposSuccess)
        .catch(getReposFailure);
    });

    function activate() {
      var promises = [];
      return $q.all(promises).then(function () {
        logger.info('Activated Dashboard View');
      });
    }

    function getReposSuccess(response) {
      vm.repos = response.data;
    }

    function getReposFailure(err) {
      console.log(err);
      vm.repos = {};
    }

    function getPostsSuccess(response) {
      vm.posts = response.data.posts;
    }

    function getPostFailure(err) {
      console.log(err);
      vm.posts = {};
    }
  }
})();
