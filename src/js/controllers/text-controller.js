angular.module('Angelhack.controllers.Main')

    .controller('TextCtrl', ['$scope', 'RemoteCommService', function ($scope, RemoteCommService) {
        $scope.messages = {};
        $scope.loading = false;
        $scope.submit = function () {
            $scope.loading = true;
            var textData = $scope.subject + ' ' + $scope.description;
            RemoteCommService.submitTextForSentiment({text: textData}, function() {
                $scope.loading = false;
                $scope.messages.success = "Your incident is reported. Thank You!";
            }, function() {
                $scope.loading = false;
                $scope.messages.error = "Unable to upload your incident right now. Please try again";
            });


        };

    }]);