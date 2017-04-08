(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardController', ['$q', '$sce', 'logger', 'securityFactory',
      'dashboardFactory', DashboardController]);

  /* @ngInject */
  function DashboardController($q, $sce, logger, securityFactory, dashboardFactory) {
    var vm = this;
    vm.news = {
      title: 'Portal',
      description: 'Portal .'
    };

    vm.title = 'Dashboard';
    vm.twitterUrl = 'https://twitter.com/Kh40s_z3r0';
    vm.followUser = $sce.trustAsHtml('@Kh40s_z3r0');

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
      vm.repos = {};
    }

    function getPostsSuccess(response) {
      vm.posts = response.data.posts;
    }

    function getPostFailure(err) {
      vm.posts = {};
    }
  }
})();
