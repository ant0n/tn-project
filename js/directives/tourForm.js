app.directive('tourForm', function() { 
  return { 
    restrict: 'E',
    controller: 'ToursController',
    scope: { }, 
    templateUrl: 'js/directives/tourForm.html',
    link: function(scope, element, attrs){
      scope.showForm = false;
    }
  }; 
});