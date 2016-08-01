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

    vm.name = 'Sergio Marcial';
    vm.email = 'sergio.marcial@sergiomarcial.com';
    vm.number = '+1 (555) 555 - 5555';
    vm.role = 'CEO, Architect and more';

  }
})();
