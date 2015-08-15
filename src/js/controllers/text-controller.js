angular.module('Angelhack.controllers.Main')

    .controller('TextCtrl', ['$scope', function ($scope) {
        $scope.messages = {};
        $scope.loading = false;
        $scope.submit = function () {
            $scope.loading = true;

            //$scope.loading = false;
            $scope.messages.success = "Your incident is reported. Thank You!";
        };

    }]);