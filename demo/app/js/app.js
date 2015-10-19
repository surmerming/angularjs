var app = angular.module('doufu', ['ui.router']);
function headerCtrl($scope, $rootScope){
    $rootScope.bLoginShow = false;
    $rootScope.bLogin = false;

    $rootScope.showLoginForm = function(){
        $rootScope.bLoginShow = true;
    };
    $rootScope.hideLoginForm = function(){
        $rootScope.bLoginShow = false;
    };
}
function footerCtrl(){

}
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                'main@index': {
                    templateUrl: 'tpls/home/main.html'
                }
            }
        })
        .state('drawing', {
            url: '/drawing',
            views: {
                'main@index': {
                    templateUrl: 'tpls/drawing/main.html'
                }
            }
        })
        .state('index.cos', {
            url: '/cos',
            views: {
                '': {
                    templateUrl: 'tpls/cos/index.html'
                },
                'main@index': {
                    templateUrl: 'tpls/cos/main.html'
                }
            }
        })
        .state('index.novel', {
            url: '/novel',
            views: {
                '': {
                    templateUrl: 'tpls/novel/index.html'
                },
                'main@index': {
                    templateUrl: 'tpls/novel/main.html'
                }
            }
        })
        .state('index.my', {
            url: '/novel',
            views: {
                '': {
                    templateUrl: 'tpls/my/index.html'
                },
                'main@index': {
                    templateUrl: 'tpls/my/main.html'
                }
            }
        })
});

app.directive("love", function() {
    return {
        restrict: 'AE',
        template: '<div>love.html</div>',
        replace: true
    };
});
