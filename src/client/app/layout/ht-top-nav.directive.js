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
    function TopNavController(logger, $state, $translate, $sce, $scope) {
      /*jshint validthis:true */
      var vm = this;

      vm.trustAsHtml = $sce.trustAsHtml;
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
      vm.clients = clients;
      vm.services = services;
      vm.projects = projects;
      var translationTag;

      var hour = new Date().getHours();
      if (hour >= 0 && hour <= 6) {
        translationTag = 'greeting-late-night';
      } else if (hour >= 6 && hour <= 12) {
        translationTag = 'greeting-morning';
      } else if (hour >= 12 && hour <= 19) {
        translationTag = 'greeting-afternoon';
      } else if (hour >= 19 && hour <= 23) {
        translationTag = 'greeting-night';
      }

      createGreeting();

      function createGreeting() {
        $translate(translationTag).then(function (translation) {
          vm.greeting = translation;
        });
      }

      function contact() {
        $state.go('contact');
      }

      function clients() {
        $state.go('clients');
      }

      function services() {
        $state.go('services');
      }

      function projects() {
        $state.go('projects');
      }
    }

    return directive;
  }
})();
