/**
 * Created by sergiomarcial on 8/1/16.
 */
(function () {

  angular.module('app.config').constant('APP_CONFIG', {
    server: {
      local: 'http://localhost:9000/',
      prod: 'http://www.sergiomarcial.com/'
    },
    api: {
      local: 'portal-api',
      prod: 'api'
    },
    version: {
      local: '/v1',
      prod: '/v1'
    }
  });
})();
