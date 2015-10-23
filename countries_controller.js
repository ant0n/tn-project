angular.module("tnTour").controller("CountriesController", function($scope, $controller, $resource){
  angular.extend(
    this,
    $controller('DataController', {$scope: $scope, $resource: $resource})
  )

  $scope.showForm  = [];

  $scope.addCountry = function(){
    new Country($scope.newCountry).$save().then(function(country){
      var countryFromServer = angular.extend(country, $scope.newCountry);
      $scope.countries.push(countryFromServer);
      $scope.newCountry = {};
    });
  }

  $scope.saveCountry = function(country, $index){
    country.$update().then(function(){
      $scope.countries[$index] = country;  
      $scope.showForm[$index]  = false;
    })
  }

  $scope.deleteCountry = function(country, $index){
    country.$delete().then(function(){
      $scope.countries.splice($index, 1);
    })
  }
});