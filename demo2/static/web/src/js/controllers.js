define(['angular', "services"], function(app, services){
    var app = angular.module("doufu.controllers", ['doufu.services']);
    app.controller('DemoCtrl', ['$scope', 'userListService', function($scope, userListService){
        $scope.hello = userListService.hello;
    }]);

    /*app.directive('hello', function() {
        return {
            restrict: 'AE',
            template: '<div>hello.html</div>',
            replace: true
        };
    });*/
    console.log(app);

    return app;
});