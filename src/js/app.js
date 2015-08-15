angular.module('Angelhack', [
    'ngRoute',
    'mobile-angular-ui',
    'Angelhack.controllers.Main'
])

    .config(function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'home.html', reloadOnSearch: false});
        $routeProvider.when('/by-photo', {
            templateUrl: 'by-photo.html',
            reloadOnSearch: false
        });
        $routeProvider.when('/by-voice', {
            templateUrl: 'by-voice.html',
            controller: 'VoiceCtrl',
            reloadOnSearch: false
        });
        $routeProvider.when('/by-text', {templateUrl: 'by-text.html', reloadOnSearch: false});
        $routeProvider.when('/preferences', {templateUrl: 'preferences.html', reloadOnSearch: false});
    });


