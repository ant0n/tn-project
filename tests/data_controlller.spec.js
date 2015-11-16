describe('DataController', function(){
	var $scope, $httpBackend;

	beforeEach(function(){
		module('tnTour');

		inject(function($controller, $rootScope, _$httpBackend_){
			$httpBackend = _$httpBackend_;
			$scope 			 = $rootScope.$new();

			$controller('DataController', {$scope: $scope});
		});
	});

	describe('initialize controller', function(){
		var url  = "https://api.parse.com/1/classes/",
			  data = ['Country', 'Tour', 'Place']; // удивительная штука, если поменять местами, все сломается

		it('expect call to parse.com and get ' + data.join(', '), function(){
			
			for(var i= 0; i < data.length; i++) { 
				$httpBackend.expectGET(url+data[i]).respond(200)
			}
			$httpBackend.expectGET('main.html').respond(200); // ломается если не добавить

			expect($httpBackend.verifyNoOutstandingExpectation).not.toThrow();
		});
	});
});