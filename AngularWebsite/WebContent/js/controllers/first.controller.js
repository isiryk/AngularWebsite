var mainApp = angular.module('mainApp');

mainApp.controller("FirstController", ['$scope', function($scope){
	$scope.fname = 'Ivan';
	$scope.lname = 'S';
	
	$scope.fullname = function(){
		return 'My name is ' + $scope.fname + ' ' + $scope.lname;
	}
	
	$scope.isSpy = true;
	$scope.toggleSpy = function(){
			$scope.isSpy = !$scope.isSpy
	}
	
	$scope.codeName = 'Yoda';
	
	$scope.count = 0;
	
	$scope.employees = [
		{
			fname : 'Roger',
			lastname : 'Smith',
			salary : '50000'
		},
		{
			fname : 'Sam',
			lastname : 'Smith',
			salary : '30000'
		},
		{
			fname : 'Will',
			lastname : 'Smith',
			salary : '40000'
		},
	]
}]);