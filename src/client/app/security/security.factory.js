/**
 * Created by sergiomarcial on 7/3/16.
 */
(function () {
  'use strict';

  angular.module('app.security')
    .factory('securityFactory', securityFactory);

  /* @ngInject */
  function securityFactory($http) {
    var service = {
      getToken: getToken
    };

    return service;

    function getToken() {
      return $http.get('http://localhost:3000/api/getToken')
        .then(getTokenSuccess)
        .catch(getTokenFailure);
    }

    function getTokenSuccess(response) {
      return response;
    }

    function getTokenFailure(err) {
      return err;
    }
  }

})();
