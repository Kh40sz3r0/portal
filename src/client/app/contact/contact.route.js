/**
 * Created by sergiomarcial on 4/30/16.
 */
(function() {
  'use strict';

  angular
    .module('app.contact')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'contact',
        config: {
          url: '/contact',
          templateUrl: 'app/contact/contact.html',
          controller: 'ContactController',
          controllerAs: 'ContactControllerVm',
          title: 'Contact'
        }
      }
    ];
  }
})();
