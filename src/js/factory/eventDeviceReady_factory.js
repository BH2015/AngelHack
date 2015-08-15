angular.module('Angelhack.controllers.Main').factory('Angelhack.factory.EventDeviceReady1',[function(){
    return function(fn) {
        var queue = [];
        var impl = function() {
            this.queue.push(Array.prototype.slice.call(arguments));
        };

        document.addEventListener('deviceready', function() {
            this.queue.forEach(function(args){
                fn.apply(this,args);
            },this);
            impl = fn;
        },false);

        return function() {
            impl.apply(this, arguments);
        }
    }
}]);

angular.module('Angelhack.controllers.Main').factory('Angelhack.factory.EventDeviceReady2',[function(){
    return function(done) {
        if (typeof window.cordova === 'object') {
            document.addEventListener('deviceready', function () {
                done();
            }, false);
        } else {
            done();
        }
    };
}]);