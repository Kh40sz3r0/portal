/**
 * Created by sergiomarcial on 5/12/16.
 */
(function () {
  'use strict';

  angular.module('app.contact')
    .factory('contactFactory', ['$http', '$q', 'exception', 'logger', contactFactory]);

  /* @ngInject */
  function contactFactory($http, logger, exception) {
    var service = {
      sendEmail: sendEmail
    };

    return service;

    function sendEmail() {
      return $http.post('/api/send-email')
        .then(success)
        .catch(fail);
    }

    function success(response) {
      return response.data;
    }

    function fail(e) {
      return exception.catcher('XHR Failed for getPeople')(e);
    }

  }

})();
