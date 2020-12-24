"use strict";

angular.module("dashboard").component("dashboard", {
  templateUrl: "dashboard/dashboard.template.html",
  controller: [
    function TemplateController() {
      this.text = "test";
    }
  ]
});
