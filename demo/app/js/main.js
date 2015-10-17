/*
require.config({
    paths: {
        "angular-route": "../lib/angular-route.min.js",
        "angular-animate": "../lib/angular-animate.min.js"
    },
    //这个配置是你在引入依赖的时候的包名
    shim:{
        "angular-route":{
            exports:"angular-route"
        },
        "angular-animate":{
            exports:"angular-animate"
        }
    }
});
*/

var app = angular.module('doufu', ['ui.router']);
