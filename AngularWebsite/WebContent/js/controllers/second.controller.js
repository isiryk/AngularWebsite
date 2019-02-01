var mainApp = angular.module('mainApp');

mainApp.controller("SecondController", ['$scope', function($scope){
	$scope.form = {};
	
	$scope.addReview = function(){
		$scope.reviews.push($scope.form);
		$scope.form = {};
	}
	
	$scope.reviews = [
		{
			"comment" : "Great food",
			"by" : "Ivan@email.com"
		},
		{
			"comment" : "Amazing food",
			"by" : "Alex@email.com"
		},
		{
			"comment" : "Cool food",
			"by" : "John@email.com"
		},
	]
}]);