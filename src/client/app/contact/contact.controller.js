/**
 * Created by sergiomarcial on 5/1/16.
 */
(function () {
  'use strict';

  angular
    .module('app.contact')
    .controller('ContactController', ['logger', 'contactFactory', ContactController]);

  /* @ngInject */
  function ContactController(logger, contactFactory) {
    var vm = this;
    vm.title = 'Contact';
    vm.sendEmail = sendEmail;

    function sendEmail(){
      contactFactory.sendEmail();
    }


    console.log('contact controller');
  }
})();
