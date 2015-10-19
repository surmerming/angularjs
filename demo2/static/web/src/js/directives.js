define(['app'], function(app){
    app.directive("love", function() {
        return {
            restrict: 'AE',
            template: '<div>love.html</div>',
            replace: true
        };
    });
});