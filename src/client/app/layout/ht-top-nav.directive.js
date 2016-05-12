'use strict';
(function () {

  angular
    .module('app.layout')
    .directive('htTopNav', htTopNav);

  /* @ngInject */
  function htTopNav() {
    var directive = {
      bindToController: true,
      controller: TopNavController,
      controllerAs: 'vm',
      restrict: 'EA',
      scope: {
        'navline': '='
      },
      templateUrl: 'app/layout/ht-top-nav.html'
    };

    /* @ngInject */
    function TopNavController(logger, $rootScope, $state, translationsFactory) {
      /*jshint validthis:true */
      var vm = this;
      vm.projects = 'Proyectos';
      vm.services = 'Servicios';
      vm.clients = 'Clientes';
      vm.contacts = 'Contacto';
      vm.options = [
        {
          name: 'Account',
          value: 'account'
        }
      ];
      vm.contact = contact;

      createGreeting();

      function createGreeting() {
        var hour = new Date().getHours();
        if (hour >= 0 && hour <= 6) {
          vm.greeting = 'Should you not be sleep? ';
        } else if (hour >= 6 && hour <= 12) {
          vm.greeting = 'Good Morning! ';
        } else if (hour >= 12 && hour <= 19) {
          vm.greeting = 'Good Afternoon! ';
        } else if (hour >= 19 && hour <= 23) {
          vm.greeting = 'Good Night! ';
        }
      }

      function contact() {
        console.log('go state contact');
        $state.go('contact');
      }
    }

    return directive;
  }
})();
