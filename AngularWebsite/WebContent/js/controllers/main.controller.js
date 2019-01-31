var mainApp = angular.module('mainApp');

mainApp.controller("MainController", ['$scope', function($scope){
	$scope.displayfirst = false;
	$scope.displaysecond = false;
	
	$scope.togglefirst = function(){
		$scope.displayfirst = !$scope.displayfirst;
	}
	
	$scope.togglesecond = function(){
		$scope.displaysecond = !$scope.displaysecond;
	}
}]);