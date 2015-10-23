angular.module('tnTour', ['ngRoute', 'ngResource'])
.config(function($routeProvider, $locationProvider, $httpProvider) {
  $routeProvider
  .when('/',{
    templateUrl: "main.html",
    controller: 'MainController',
    publicAccess: true
  })
  .when('/tours',{
    templateUrl: "tours_list.html",
    controller: 'ToursController',
    publicAccess: false
  })
  .when('/countries',{
    templateUrl: "countries_list.html",
    controller: 'CountriesController',
    publicAccess: false
  })
  .when('/places',{
    templateUrl: "places_list.html",
    controller: 'PlacesController',
    publicAccess: false
  })
  .when('/tour/:id', {
    templateUrl: "tour.html",
    controller: "TourController",
    publicAccess: true
  })
  .otherwise({
    redirectTo: '/'
  });

  $httpProvider.defaults.headers.common = {
    "X-Parse-Application-Id": "xAhB4qGdZ2QA9g7J0o45786vogcAQw8Rr3IkVWxK",
    "X-Parse-REST-API-Key": "UFmqpwXBbtNTR9XdJmA9EMhG7rmyFupSmHarSwyN"
  }
  $locationProvider.html5Mode(true);
})
.run(function($rootScope, $route, $location){
  $rootScope.$on("$locationChangeStart", function(event, next, current){

    var nextPath = $location.path();
    var nextRoute = $route.routes[nextPath] || false;
    if (false ){ // !nextRoute.publicAccess
      alert('Необходима регистрация.')
      $location.path('/');
    }
  });
});