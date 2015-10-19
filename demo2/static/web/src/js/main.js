requirejs.config({
    baseUrl: './static/',
    paths: {
        'angular': 'common/lib/angular/angular.min',
        'angular-router': 'common/lib/angular/angular-ui-router',
        'domReady': 'common/lib/domReady',
        'directives': 'web/src/js/directives',
        'services': 'web/src/js/services',
        'filters': 'web/src/js/filters',
        'config': 'web/src/js/config',
        'app':  'web/src/js/app',
        'bootstrap': 'web/src/js/bootstrap',
        'router': 'web/src/js/router',
        'controllers': 'web/src/js/controllers',
        'module': 'web/src/js/module'
    },
    shim: {
        'angular' : { exports: 'angular' },
        'angular-router': { deps: ['angular'], exports: 'angular-router' },
        'directives': { deps: ['angular'] },
        'services': { deps: ['angular'] },
        'filters': { deps: ['angular'] }
    },
    deps:['app'],
    urlArgs: "bust=" + (new Date()).getTime()  //防止读取缓存，调试用
});

/*require([
    'angular',
    'app'
    ], function(angular, app) {
        var $html = angular.element(document.getElementsByTagName('html')[0]);
        angular.element().ready(function() {
            // bootstrap the app manually
            angular.bootstrap(document, ['doufu']);
        });
    }
);
*/