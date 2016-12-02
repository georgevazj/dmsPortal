angular.module("dms",["ngRoute","ngResource"])
  .config(function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
      })
  .config(function($routeProvider){
    $routeProvider
      .when("/", {
        controller: "ESController",
        templateUrl: "templates/home.html"
      })
      .when("/es", {
        controller: "ESController",
        templateUrl: "templates/home.html"
      })
      .when("/en", {
        controller: "ENController",
        templateUrl: "templates/home.html"
      })
      .when("/de", {
        controller: "DEController",
        templateUrl: "templates/home.html"
      })
  })