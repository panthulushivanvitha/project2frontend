/**
 * 
 */
var app=angular.module('app',['ngRoute'])
app.config(function($routeProvider){
	$routeProvider
	.when('/register',{
		templateUrl:'views/registrationform.html',
		controller:'UserController'
	})
	.when('/login',{
		templateUrl:'views/login.html',
		controller:'UserController'
	})
	.otherwise({
		templateUrl:'views/home.html'
	})
	app.run(function($rootScope,$location,UserService,$cookieStore){
	if($rootScope.loggedInUser==undefined)
		$rootScope.loggedInUser=$cookieStore.get("loggedInUser")
		
		$rootScope.logout=function()
		{
		UserService.logout().then(function(response)
				{
			$rootScope.message="Loggedout Successfully..."
				delete $rootScope.loggedInUser
				$cookieStore.remove("loggedInUser")
				$location.path('/login')
				},function(response)
				{
					console.log(response.status)
					$rootScope.message=response.data.message
					$location.path('/login')
				})
	}
})
	
})