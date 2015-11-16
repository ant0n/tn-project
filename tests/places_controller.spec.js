// этот тест писался для практики с методом spy будет переписан
describe('PlacesController', function(){
	var $scope, $httpBackend;

	beforeEach(function(){
		module('tnTour');

		inject(function($controller, $rootScope, _$httpBackend_){
			$httpBackend = _$httpBackend_;
			$scope 			 = $rootScope.$new();

			$controller('PlacesController', {$scope: $scope});
		});
	});
	describe('initialize controller', function(){
		it('expect method push to have been called on $scope.places ', function(){
			var url  = "https://api.parse.com/1/classes/",
			    data = ['Country', 'Tour', 'Place'];
			for(var i= 0; i < data.length; i++) { 
				$httpBackend.expectGET(url+data[i]).respond(200)
			}
			$httpBackend.expectGET('main.html').respond(200);

			$httpBackend.whenPOST(url+'Place').respond(201);
			spyOn($scope.places, 'push');
			$scope.addPlace();
			$httpBackend.flush();
			expect($scope.places.push).toHaveBeenCalled();
		});
	});
});