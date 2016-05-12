/**
 * Created by sergiomarcial on 5/12/16.
 */
(function () {
  'use strict';

  angular.module('app.translations', [
    'app.core',
    'pascalprecht.translate',
    'tmh.dynamicLocale']).constant('LOCALES', {
    'locales': {
      'es_MX': 'Español',
      'en_US': 'English'
    },
    'preferredLocale': 'es_MX'
  }).config(['$translateProvider', function ($translateProvider) {
    $translateProvider.useMissingTranslationHandlerLog();
    $translateProvider.useSanitizeValueStrategy('sanitize');
    $translateProvider.preferredLanguage('es_MX');
    $translateProvider.translations('en_US', {
        'layout.ht-top.projects': 'Projects',
        'layout.ht-top.services': 'Services',
        'layout.ht-top.clients': 'Clients',
        'layout.ht-top.contact': 'Contact',
        'directives.language-select.Language': 'Language'
      }
    );
    $translateProvider.translations('es_MX', {
        'layout.ht-top.projects': 'Proyectos',
        'layout.ht-top.services': 'Servicios',
        'layout.ht-top.clients': 'Clientes',
        'layout.ht-top.contact': 'Contacto',
        'directives.language-select.Language': 'Idioma'
      }
    );

    $translateProvider.translations('ru_RU', {
        'views.main.Splendid': 'Отлично!',
        'directives.language-select.Language': 'Язык'
      }
    );
  }]).config(function (tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.localeLocationPattern(
      'bower_components/angular-i18n/angular-locale_{{locale}}.js'
    );
  });

})();
