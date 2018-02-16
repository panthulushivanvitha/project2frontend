/**
 * 
 */
app.controller('UserController',function($scope,$rootScope,$location,UserService){
	$scope.registerUser=function(user){ 
		UserService.registerUser(user).then(
		function(response){
			alert('Registered Successfully')
			$location.path('/home')
		},function(response){
			$scope.error=response.data
		})
		
	}
	$scope.login=function(user){
		UserService.login(user).then(function(response){
			$rootScope.loggedInUser=response.data
			$location.path('/home')
		},function(response){
			
			$scope.error=response.data
			$location.path('/login')
		}
		)
	}
})