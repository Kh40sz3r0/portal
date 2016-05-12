/**
 * Created by sergiomarcial on 5/1/16.
 */
(function () {
  'use strict';

  angular
    .module('app.contact')
    .controller('ContactController', ['logger', ContactController]);

  /* @ngInject */
  function ContactController(logger) {
    var vm = this;
    vm.title = 'Contact';

    console.log('contact controller');
  }
})();
