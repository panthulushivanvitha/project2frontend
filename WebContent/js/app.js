/**
 * 
 */
var app=angular.module('app',['ngRoute','ngCookies'])
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
	.when('/edituserprofile',{
		templateUrl:'views/edituserprofile.html',
		controller:'UserController'	
	})
	.when('/addjob',{
		templateUrl:'views/jobform.html',
		controller:'JobController'
	})
	.when('/getjob/:id',{
		templateUrl:'views/jobdetail.html',
		controller:'JobController'
	})
	.when('/alljobs',{
		templateUrl:'views/jobtitle.html',
		controller:'JobController'
	})
	.when('/addblog', {
		templateUrl : 'views/blogform.html', // V to Controller
		controller : 'BlogPostController'
	})
.when('/getallblogs',{
		templateUrl:'views/blogslist.html',
		controller:'BlogPostController'
	})
	.when('/getBlogForApproval/:id',{
		templateUrl:'views/approvalform.html',
		controller:'BlogDetailController'
	})
	.when('/getBlogDetail/:id',{
		templateUrl:'views/blogdetail.html',
		controller:'BlogDetailController'
	})


	.otherwise({
		templateUrl:'views/home.html'
	})
})
	app.run(function($rootScope,$location,UserService,$cookieStore){
	if($rootScope.loggedInUser==undefined)
		$rootScope.loggedInUser=$cookieStore.get("currentuser")
		
		$rootScope.logout=function()
		{
		UserService.logout().then(function(response)
				{
			
				delete $rootScope.loggedInUser
				$cookieStore.remove("currentuser")
				$rootScope.message="Loggedout Successfully..."
				$location.path('/home')
				},function(response)
				{
					$rootScope.error=response.data
					if(response.status==401)
					$location.path('/login')
				})
	}
})
	
