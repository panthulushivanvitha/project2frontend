app.factory('BlogPostService',function($http)
		{
var blogPostService={}

blogPostService.saveBlog=function(blogPost)
{
return $http.post("http://localhost:8181/Backend2/saveblogpost", blogPost)
}

blogPostService.blogsApproved=function()
{
	return $http.get("http://localhost:8181/Backend2/listofblogs/"+1)
	}

blogPostService.blogsWaitingForApproval=function()
{
	return $http.get("http://localhost:8181/Backend2/listofblogs/"+0)
	}

blogPostService.getBlogPost=function(id)
{
	return $http.get("http://localhost:8181/Backend2/getblogpost/"+id)
	}

blogPostService.updateApproval=function(blogpost)
{
	return $http.put("http://localhost:8181/Backend2/updateApproval", blogpost)
	}

blogPostService.addComment=function(blogComment){
    return $http.post("http://localhost:8181/Backend2/addblogcomment",blogComment)
    }

blogPostService.getBlogComments=function(blogId){
    return $http.get("http://localhost:8181/Backend2/getblogcomments/"+blogId)
    }

return blogPostService;
})