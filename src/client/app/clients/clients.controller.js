/**
 * Created by sergiomarcial on 6/26/16.
 */
(function () {
  'use strict';

  angular
    .module('app.contact')
    .controller('ClientsController', ['logger', '$stateParams', ClientsController]);

  /* @ngInject */
  function ClientsController(logger, $stateParams) {
    var vm = this;
  }
})();
