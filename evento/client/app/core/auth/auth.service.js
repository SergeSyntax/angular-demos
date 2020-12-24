"use strict";

angular.module("core.auth").factory("Auth", [
  "$cookies",
  function($cookies) {
    return function auth(email, password) {
      return axios
        .post("http://localhost:5000/api/users/auth/login", {
          email: email,
          password: password
        })
        .then(res => {
          $cookies.put("authorization", res.data.authorization, {
            expires: new Date(new Date().getTime() + 30 * 60 * 1000).toString()
          });
        });
    };
  }
]);
