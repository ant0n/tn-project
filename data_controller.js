angular.module("tnTour").controller("DataController", function($resource, $scope, $q){
  parseResults = function(data, headersGetter){
    data = angular.fromJson(data);
    return data.results
  }

  Country = $resource(
    'https://api.parse.com/1/classes/Country/:objectId',
    {objectId: '@objectId'},
    {
    	query: {isArray: true, transformResponse: parseResults},
    	update: {method: 'PUT'}
    }
  )
  $scope.countries = Country.query();
  
  Tour = $resource(
    'https://api.parse.com/1/classes/Tour/:objectId',
    {objectId: '@objectId'},
    {
    	query: {isArray: true, transformResponse: parseResults},
    	update: {method: 'PUT'}
    }
  )
  $scope.tours = Tour.query();

  Place = $resource(
    'https://api.parse.com/1/classes/Place/:objectId',
    {objectId: '@objectId'},
    {
    	query: {isArray: true, transformResponse: parseResults},
    	update: {method: 'PUT'}
    }
  )
  $scope.places = Place.query();

});