define(['angular'], function(angular) {
	angular.module('filters', [])
	.filter('filter1',function(){
	    return function(item){
	        return item + 'o(∩_∩)o';
	    }
	});  
});