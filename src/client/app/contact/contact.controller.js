/**
 * Created by sergiomarcial on 5/1/16.
 */
(function () {
  'use strict';

  angular
    .module('app.contact')
    .controller('ContactController', ['logger', '$stateParams', ContactController]);

  /* @ngInject */
  function ContactController(logger, $stateParams) {
    var vm = this;
    vm.title = 'Contact';
  }
})();
