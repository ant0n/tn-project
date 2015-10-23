angular.module("tnTour").controller("ToursController", function($scope, $controller, $resource){
  angular.extend(
    this,
    $controller('DataController', {$scope: $scope, $resource: $resource})
  )

  $scope.showForm = false;
  $scope.editForm = false;


  var defaultTour = {
    title:    "",
    country:  "",
    text:     "",
    price:    null
  }

  $scope.clearForm = function() {
    $scope.tourForm.$setPristine();
    $scope.newTour  = defaultTour;
    $scope.showForm = false 
  }

  $scope.addTour = function(tour){
    new Tour($scope.newTour).$save().then(function(tour){
      var tourFromServer = angular.extend(tour, $scope.newTour);
      $scope.tours.push(tourFromServer);
      $scope.clearForm();
    });
  }

  $scope.editTour = function(tour, $index){
    $scope.newTour   = angular.copy(tour)
    $scope.editIndex = $index
    $scope.showForm  = true
    $scope.editForm  = true
  }

  $scope.saveTour = function(tour){
    tour = angular.copy($scope.newTour);

    tour.$update().then(function(){
      angular.extend($scope.tours[$scope.editIndex], tour);
      $scope.clearForm();
    })

  }

  $scope.deleteTour = function(tour, $index){
    tour.$delete().then(function(){
      $scope.tours.splice($index, 1);
    })
  }
});