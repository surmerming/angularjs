define(['angular', 'services'], function(angular) {
    angular.module('doufu.directives', ['doufu.services'])  
        .directive('appVersion', ['version', function(version) {  
            return function(scope, elm, attrs) {  
                elm.text(version);  
        };  
    }]);   
});