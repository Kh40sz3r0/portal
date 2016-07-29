/**
 * Created by sergiomarcial on 7/1/16.
 */
(function () {
  'use strict';

  angular
    .module('app.projects')
    .controller('ProjectsController', ['logger', '$stateParams', ProjectsController]);

  /* @ngInject */
  function ProjectsController(logger, $stateParams) {
    var vm = this;
  }
})();
