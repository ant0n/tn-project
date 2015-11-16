angular.module("tnTour").controller("PlacesController", function($scope, $controller, $resource){
  angular.extend(
    this,
    $controller('DataController', {$scope: $scope, $resource: $resource})
  )

  $scope.showForm  = [];

  $scope.addPlace = function(){
    new Place($scope.newPlace).$save().then(function(place){
      var placeFromServer = angular.extend(place, $scope.newPlace);
      $scope.places.push(placeFromServer);
      $scope.newPlace = {};
    });
  }

  $scope.savePlace = function(place, $index){
    place.$update().then(function(){
      $scope.places[$index] = place;  
      $scope.showForm[$index]  = false;
    })
  }

  $scope.deletePlace = function(place, $index){
    place.$delete().then(function(){
      $scope.places.splice($index, 1);
    })
  }
});