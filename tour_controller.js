angular.module("tnTour").controller("TourController", function($scope, $controller, $routeParams, $resource){
	angular.extend(
    this,
    $controller('DataController', {$scope: $scope, $resource: $resource})
  )

	$scope.tour = Tour.get({objectId: $routeParams.id}).$promise.then(function(data){
		$scope.tour = data;
	}, function(){window.location = '/'});
});