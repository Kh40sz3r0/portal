/**
 * Created by sergiomarcial on 6/26/16.
 */
/**
 * Created by sergiomarcial on 4/30/16.
 */
(function() {
  'use strict';

  angular
    .module('app.clients')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    console.log('state clients');
    return [
      {
        state: 'clients',
        config: {
          url: '/clients',
          templateUrl: 'app/clients/clients.html',
          controller: 'ClientsController',
          controllerAs: 'ClientsControllerVm',
          title: 'Clients'
        }
      }
    ];
  }
})();
