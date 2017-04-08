/**
 * Created by sergiomarcial on 7/1/16.
 */
(function() {
  'use strict';

  angular
    .module('app.projects')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'projects',
        config: {
          url: '/projects',
          templateUrl: 'app/projects/projects.html',
          controller: 'ProjectsController',
          controllerAs: 'ProjectsControllerVm',
          title: 'Projects'
        }
      }
    ];
  }
})();
