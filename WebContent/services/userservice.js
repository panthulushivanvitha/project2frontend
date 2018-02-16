/**
 * 
 */
app.factory('UserService',function($http){
	var userService={}
	
	userService.registerUser=function(user){
	
	console.log('in userservice'+user)	
	console.log(user)
	return	$http.post("http://localhost:8181/Backend2/registeruser",user)
	}
	userService.login=function(user){
		console.log('userservice-> login')
		console.log(user)
		return $http.post("http://localhost:8181/Backend2/login",user)
	}
	 userService.logout=function(user)
	    {
	        return $http.get("http://localhost:8181/Backend2/logout",user)
	    }
	return userService;
})