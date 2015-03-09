var app = angular.module('nickOfTime');

app.controller('signupController', function($scope, $location, userService) {

	////////////////////////////////////////////////////////////////
	//$scope.env = EnvironmentService.getEnv(); 

	////////////////////////////////////////////////////////////////
	$scope.signupUser = function(signupObj) {

		//TODO: need to verify that the password and confirm password
		//match.  How do I report back to the screen when no match?
		//Also, how do we trap the existence of users that already exist?

		userService.signupUser(signupObj);

		$location.path('/login');
	};	

	////////////////////////////////////////////////////////////////
});