"use strict";

angular.module("login").component("login", {
  templateUrl: "login/login.template.html",
  controller: [
    "$cookies",
    "$location",
    "Auth",
    "VerifyAuth",
    function LoginController($cookies, $location, Auth, VerifyAuth) {
      var cookie = $cookies.get("authorization");
      if (cookie)
        VerifyAuth()
          .then(res => {
            console.log($location);

            $location.replace("/dashboard");
            console.log(res);
          })
          .catch(err => {
            delete axios.defaults.headers.common["authorization"];
            $cookies.remove("authorization");
          });

      this.email = "sergway@gmail.com";
      this.password = "123456";
      this.submit = () =>
        Auth(this.email, this.password)
          .then(() =>
            VerifyAuth()
              .then(res => console.log(res.data))
              .catch(err => {
                console.log(err);
              })
          )
          .catch(() => console.log("catch")); // put reject message form validation

      var cookie = $cookies.get("authorization");
      // if (cookie) $location.path("/dashboard");
      // if (!cookie) return $location.path("/login");
      // axios.defaults.headers.common["authorization"] = cookie;
      // axios
      //   .get("http://localhost:5000/api/users/auth/role")
      //   .then(res => {
      //     if (res.user.role === "admin" || res.user.role === "user")
      //       $location.path("/dashboard");
      //     else {
      //       $cookies.remove("authorization");
      //       $location.path("/login");
      //     }
      //   })
      //   .catch(err => {
      //     $cookies.remove("authorization");
      //     $location.path("/login");
      //   });
    }
  ]
});
