var app = angular.module('doufu', []);
app.directive("login", function() {
    return {
        restrict: 'AECM',
        templateUrl: 'tpls/common/login.html',
        replace: true
    }
});

app.directive("hd", function() {
    return {
        restrict: 'AE',
        template: '<div>12345 header</div>',
        replace: true
    }
});

app.directive("ft", function() {
    return {
        restrict: 'AE',
        templateUrl: 'tpls/common/header.html',
        replace: true
    }
});