(function () {
  'use strict';

  angular.module('app', [
    'app.core',
    'app.widgets',
    'app.admin',
    'app.dashboard',
    'app.layout',
    'pascalprecht.translate',
    'tmh.dynamicLocale'
  ]).constant('LOCALES', {
    'locales': {
      'es_MX': 'Español',
      'en_US': 'English'
    },
    'preferredLocale': 'es_MX'
  }).config(function ($translateProvider) {
    $translateProvider.useMissingTranslationHandlerLog();
  }).config(function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: '../../translation/locale-',// path to translations files
      suffix: '.json'// suffix, currently- extension of the translations
    });
    $translateProvider.preferredLanguage('es_MX');// is applied on first load
    //$translateProvider.useLocalStorage();// saves selected language to localStorage
  }).config(function (tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.localeLocationPattern(
      'bower_components/angular-i18n/angular-locale_{{locale}}.js'
    );
  });

})();
