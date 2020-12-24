"use strict";
angular.module("app").config([
  "$routeProvider",
  function config($routeProvider) {
    $routeProvider
      .when("/login", { template: "<login></login>" })
      .when("/dashboard", { template: "<dashboard></dashboard>" })
      .otherwise("/login");
  }
]);
