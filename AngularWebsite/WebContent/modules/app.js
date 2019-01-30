var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', function($scope){
	
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
			lname : 'Smith',
			salary : '50000'
		},
		{
			fname : 'Sam',
			lname : 'Smith',
			salary : '30000'
		},
		{
			fname : 'Will',
			lname : 'Smith',
			salary : '40000'
		},
	]
}])