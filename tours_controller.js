angular.module("tnTour").controller("ToursController", function($scope){

  $scope.showForm = false;
  $scope.editForm = false;

  $scope.tours     = allTours;
  $scope.countries = allCountries;

  var defaultTour = {
    title:    "",
    country:  "",
    text:     "",
    price:    null
  }

  clearForm = function() {
    $scope.tourForm.$setPristine();
    $scope.newTour  = defaultTour;
    $scope.showForm = false 
  }

  $scope.addTour = function(tour){
    $scope.tours.push(angular.copy($scope.newTour))
    clearForm();
  }

  $scope.editTour = function(tour){
    $scope.newTour   = angular.copy(tour)
    $scope.editIndex = $scope.tours.indexOf(tour)
    $scope.showForm  = true
    $scope.editForm  = true
  }

  $scope.saveTour = function(){
    $scope.tours[$scope.editIndex] = angular.copy($scope.newTour);
    clearForm();
  }

  $scope.deleteTour = function(tour){
    var index = $scope.tours.indexOf(tour)
    $scope.tours.splice(index, 1);
  }
});