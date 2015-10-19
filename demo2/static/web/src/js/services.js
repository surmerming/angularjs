define(['angular'], function (angular) {  
    'use strict';  
      
  /* Services */ 
 
  // Demonstrate how to register services  
  // In this case it is a simple value service.  
    /*angular.module('doufu.services', [])  
        .value('version', '0.1'); */ 
    var app = angular.module('doufu.services', []);     

    app.factory('userListService', function(){
    	return {
        	'hello': 'world'
        }
    });

    return app;
}); 