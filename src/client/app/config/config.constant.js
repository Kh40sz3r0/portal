/**
 * Created by sergiomarcial on 8/1/16.
 */
(function () {

  angular.module('app.config').constant('APP_CONFIG', {
    server: {
      local: 'http://localhost:3002/',
      prod: 'http://www.sergiomarcial.com/'
    },
    api: {
      local: 'api',
      prod: 'api'
    }
  });
})();
