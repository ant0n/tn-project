angular.module("tnTour").controller("TourController", function($scope, $routeParams){
  angular.forEach(allTours, function(tour){
    if ($routeParams.linkName == tour.linkName) $scope.tour = tour
  })
  if(!$scope.tour) window.location = '/';
});