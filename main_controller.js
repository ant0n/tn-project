angular.module("tnTour").controller("MainController", function($scope, $controller, $resource, $q){
  angular.extend(
    this,
    $controller('DataController', {$scope: $scope, $resource: $resource})
  )

  $scope.descriptionLimit = 20;
  $scope.showTour         = [];
});