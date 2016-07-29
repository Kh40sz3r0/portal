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
        'greeting-late-night': 'Should you not be sleep? ',
        'greeting-morning': 'Good Morning! ',
        'greeting-afternoon': 'Good Afternoon! ',
        'greeting-night': 'Good Night! ',
        'created-by': 'Created by: ',
        'powered-by': 'Powered by: ',
        'dashboard.blog-entry': 'Blog\'s entry: ',
        'dashboard.github-repos': 'Github Repositories: ',
        'dashboard.github-repos.name': 'Name: ',
        'dashboard.github-repos.description': 'Description: ',
        'dashboard.github-repos.created-at': 'Created at: ',
        'dashboard.github-repos.ssh': 'SSH: ',
        'dashboard.github-repos.url': 'URL: ',
        'dashboard.github-repos.last-push': 'Last push: ',
        'directives.language-select.Language': 'Language'
      }
    );
    $translateProvider.translations('es_MX', {
        'layout.ht-top.projects': 'Proyectos',
        'layout.ht-top.services': 'Servicios',
        'layout.ht-top.clients': 'Clientes',
        'layout.ht-top.contact': 'Contacto',
        'greeting-late-night': 'No deberias estar dormido? ',
        'greeting-morning': 'Buenos días! ',
        'greeting-afternoon': 'Buenas tardes! ',
        'greeting-night': 'Buenas noches!',
        'created-by': 'Creado por: ',
        'dashboard.blog-entry': 'Registros del blog: ',
        'dashboard.github-repos': 'Repositorios de Github: ',
        'dashboard.github-repos.name': 'Nombre: ',
        'dashboard.github-repos.description': 'Descripci&#243;n: ',
        'dashboard.github-repos.created-at': 'Creado en: ',
        'dashboard.github-repos.ssh': 'SSH: ',
        'dashboard.github-repos.url': 'URL: ',
        'dashboard.github-repos.last-push': 'Ultimo push: ',
        'powered-by': 'Desarrollado con: ',
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
