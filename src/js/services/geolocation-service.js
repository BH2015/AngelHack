angular.module("Angelhack.controllers.Main").factory('getCurrentPosition', ['cordovaReady', '$document', '$window', '$rootScope',
    function (cordovaReady, $document, $window, $rootScope) {
        return function (done) {
            cordovaReady(function () {
                navigator.geolocation.getCurrentPosition(function (position) {
                    $rootScope.$apply(function () {
                        done(position);
                    });
                }, function (error) {
                    $rootScope.$apply(function () {
                        throw new Error('Unable to retrieve position');
                    });
                });
            });
        };
    }]);