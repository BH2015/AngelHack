angular.module('Angelhack', [
  'ngRoute',
  'mobile-angular-ui',
  'Angelhack.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});