/**
 * Created by sergiomarcial on 9/17/15.
 */
(function () {
  'use strict';

  angular
    .module('app.layout')
    .directive('footerNav', footerNav);

  /* @ngInject */
  function footerNav() {
    var directive = {
      bindToController: true,
      controller: footerNavController,
      controllerAs: 'vm',
      restrict: 'EA',
      templateUrl: 'app/layout/footer-nav.directive.html'
    };

    /* @ngInject */
    function footerNavController(config) {
      /*jshint validthis:true */
      var vm = this;

      vm.title = config.appTitle;
      vm.text = 'Created by: Sergio Marcial';
      vm.link = 'https://twitter.com/Kh40s_z3r0';
    }

    return directive;
  }
})();
