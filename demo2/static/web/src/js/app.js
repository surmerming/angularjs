define(["angular", "controllers", "directives", "filters", "services"],
	function(angular, controllers, directives, filters, services){
    return angular.module("doufu",[
    	'doufu.controllers',
    	'doufu.directives',
    	'doufu.filters',
    	'doufu.services'
     ]); 
})