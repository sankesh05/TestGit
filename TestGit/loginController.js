
 var LoginCntrl =function ($scope,$location) {

	$scope.Login=function(data){
		if($scope.username=="admin" && $scope.password=="password")
		{
			$location.path('/home');
			if(!$scope.$$phase) $scope.$apply();
			alert("hii");
		}
		else{
			alert("Wrong Details");
		}
	
	};
};


var app = angular.module('mainApp');
app.controller('loginController',LoginCntrl)
