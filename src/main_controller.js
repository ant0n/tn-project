angular.module("tnTour").controller("MainController", function($scope, $controller, $resource, $q){
  angular.extend(
    this,
    $controller('DataController', {$scope: $scope, $resource: $resource})
  )

  $scope.Filter           = {}
  $scope.showTour         = [];
  $scope.descriptionLimit = 20;

  $scope.checkPlace =  function(place, index){
  	if(angular.isDefined($scope.Filter.country)){
  		var available_place = false;
  		$scope.tours.forEach(function(tour){
  			if(!available_place && $scope.Filter.country == tour.country && tour.place == place.name)
  				available_place = true
  		})
  		return available_place
  	} else {
  		return true
  	}
  }
});