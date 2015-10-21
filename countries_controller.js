angular.module("tnTour").controller("CountriesController", function($scope){
  $scope.countries = allCountries;
  $scope.showForm  = [];

  $scope.addCountry = function(){
    $scope.countries.push(angular.copy($scope.newCountry))
  }

  $scope.editCountry = function(country){
    $scope.newCountry = angular.copy(country)
  }

  $scope.saveCountry = function(country, $index){
    $scope.countries[$index] = country;
    $scope.showForm[$index]  = false;
  }

  $scope.deleteCountry = function(country, $index){
    $scope.countries.splice($index, 1);
  }
});