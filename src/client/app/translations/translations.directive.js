/**
 * Created by sergiomarcial on 6/29/16.
 */
(function () {

  'use strict';
  angular.module('app.translations')
    .directive('ngTranslateLanguageSelect', languageSelect);

  function languageSelect($translate) {

    var directive = {
      restrict: 'A',
      replace: true,
      bindToController: true,
      template: '' +
      '<div class="language-select" ng-if="visible">' +
      '<label>' +
      '{{"directives.language-select.Language" | translate}}:' +
      '<select ng-model="currentLocaleDisplayName"' +
      'ng-options="localesDisplayName for localesDisplayName in localesDisplayNames"' +
      'ng-change="changeLanguage(currentLocaleDisplayName)">' +
      '</select>' +
      '</label>' +
      '</div>' +
      '',
      controller: function ($scope, translationsFactory) {
        $scope.currentLocaleDisplayName = translationsFactory.getLocaleDisplayName();
        $scope.localesDisplayNames = translationsFactory.getLocalesDisplayNames();
        $scope.visible = $scope.localesDisplayNames &&
          $scope.localesDisplayNames.length > 1;

        $scope.changeLanguage = function (locale) {
          translationsFactory.setLocaleByDisplayName(locale);
        };

      }
    };
    return directive;
  }

})();
