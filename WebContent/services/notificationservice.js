/**
 * 
 */
app.factory('NotificationService',function($http) {
	var notificationService={}
	notificationService.getNotificationsNotViewed=function() {
		 return $http.get("http://localhost:8181/Backend2/getnotifications")
	}
	
	notificationService.getNotification=function(id) {
		return $http.get("http://localhost:8181/Backend2/getnotification/"+id)
	}
	
	notificationService.updateNotification=function(id) {
		return $http.put("http://localhost:8181/Backend2/updatenotification/"+id)
	}
	
	return notificationService;
})