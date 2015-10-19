define(['angular'], function(app){
    var app = angular.module("doufu", []);
    app.controller('DemoCtrl', ['$scope', function($scope){
        $scope.hello = 'hello,xm';
    }]);

    /*app.directive("love", function() {
        return {
            restrict: 'AE',
            template: '<div>love.html</div>',
            replace: true
        };
    });*/
});