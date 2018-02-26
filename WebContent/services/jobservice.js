/**
 * 
 */
app.factory('JobService',function($http){
	var jobService={}
	jobService.addJob=function(job){
		return $http.post("http://localhost:8181/Backend2/addjob",job)
	}
	
	jobService.getAllJobs=function(){
		return $http.get("http://localhost:8181/Backend2/getalljobs")
	}
	
	jobService.getJobById=function(id){
        console.log(id)
        return $http.get("http://localhost:8181/Backend2/getjobbyid/"+id)
    }
	
	return jobService;
})