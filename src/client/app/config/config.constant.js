/**
 * Created by sergiomarcial on 8/1/16.
 */
(function () {

  angular.module('app.config').constant('APP_CONFIG', {
    server: {
      local: 'http://localhost:3000/',
      prod: 'https://brilliant-inferno-2901.firebaseapp.com/'
    },
    api: {
      local: 'api',
      prod: 'api'
    }
  });
})();
