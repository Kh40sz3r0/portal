/**
 * Created by sergiomarcial on 7/1/16.
 */
(function () {
  'use strict';

  angular
    .module('app.services')
    .controller('ServicesController', ['logger', '$stateParams', ServicesController]);

  /* @ngInject */
  function ServicesController(logger, $stateParams) {
    var vm = this;
  }
})();
