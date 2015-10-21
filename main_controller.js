angular.module("tnTour").controller("MainController", function($scope){
  $scope.descriptionLimit = 20;
  $scope.countries        = allCountries
  $scope.tours            = allTours;
  $scope.showTour         = [];

  $scope.selectCountry = function(country){
    angular.forEach($scope.tours, function(tour, index){
      $scope.showTour[index] = tour.country != country;
    });
  }
});