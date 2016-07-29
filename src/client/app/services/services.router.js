/**
 * Created by sergiomarcial on 7/1/16.
 */
/**
 * Created by sergiomarcial on 7/1/16.
 */
(function() {
  'use strict';

  angular
    .module('app.services')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    console.log('state services');
    return [
      {
        state: 'services',
        config: {
          url: '/services',
          templateUrl: 'app/services/services.html',
          controller: 'ServicesController',
          controllerAs: 'ServicesControllerVm',
          title: 'Services'
        }
      }
    ];
  }
})();
