describe('MainController', function(){
	var $scope, $httpBackend;

	beforeEach(function(){
		module('tnTour');

		inject(function($controller, $rootScope){
			$scope = $rootScope.$new();
			$controller('MainController', {$scope: $scope});
		});
	});

	describe('initialize controller', function(){
		it('have limit of description equal to 20 sign', function(){
			expect($scope.descriptionLimit).toBe(20)
		});

		it("define filter and showTour", function(){
			expect($scope.Filter).toEqual({})
			expect($scope.showTour).toEqual([])
		});

	});
});