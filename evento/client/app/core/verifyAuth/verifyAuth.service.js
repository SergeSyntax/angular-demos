"use strict";

angular;
("use strict");

angular.module("core.verifyAuth").factory("VerifyAuth", [
  "$cookies",
  function verifyAuthService($cookies) {
    return function() {
      var cookie = $cookies.get("authorization");
      axios.defaults.headers.common["authorization"] = cookie;
      return axios.get("http://localhost:5000/api/users/auth/role");
    };
  }
]);
