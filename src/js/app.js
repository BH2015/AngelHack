angular.module('Angelhack', [
    'ngRoute',
    'mobile-angular-ui',
    'Angelhack.controllers.Main',
    'Angelhack.factory.EventDeviceReady1',
    'Angelhack.factory.EventDeviceReady2'
])

    .config(function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'home.html', reloadOnSearch: false});
    });

