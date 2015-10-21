angular.module('tnTour', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
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
  .when('/tour/:linkName', {
    templateUrl: "tour.html",
    controller: "TourController",
    publicAccess: true
  })
  .otherwise({
    redirectTo: '/'
  });

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

var allTours = [
  {
    linkName:     'hell',
    title:        'В ад, на неделю и обратно',
    country:      'Hell',
    description:  'ОГОНЬ, ОГОНЬ, ЖАРА, ОГОНЬ!!!!!!!!!!!',
    price:        'один из смертных грехов'
  },
  {
    linkName:     'russia_piter_week',
    title:        'В питер на недельку',
    country:      'Russia',
    description:  'вперед за депресухой!',
    price:        '1000'     
  }
]

var allCountries = [
  { name: 'Russia' },
  { name: 'Hell' },
  { name: 'Germany' }
]