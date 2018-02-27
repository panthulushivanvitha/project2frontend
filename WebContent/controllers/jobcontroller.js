/**
 * 
 */
app.controller('JobController',function($scope,$rootScope,$location,JobService)
		{
	$scope.addJob=function(job){
		JobService.addJob(job).then(function(response){
			alert('Job Details Posted successfully....')
			$location.path('/home')
		},function(response){
			$rootScope.error=response.data
			if(response.status==401)
			$location.path('/login')
			
		})
	}
	
	JobService.getAllJobs().then(function(response){
		$scope.jobs=response.data;
	},function(response){
		$rootScope.error=response.data
		if(response.status==401)
		$location.path('/login')
	})
	
	
	$scope.getJobDetail=function(id){
        $scope.showdetails=true;
        JobService.getJobById(id).then(function(response){
            $scope.job=response.data;
        },function(response){
            console.log(response.status);
        })
    }
})