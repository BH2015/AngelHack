angular.module('Angelhack.controllers.Main')

    .controller('VoiceCtrl', ['$scope', function ($scope) {
        $scope.messages = {};
        $scope.isRecording = false;
        $scope.isDisabled = false;
        $scope.controlVoiceRecording = function () {
            if ($scope.isRecording) {
                $scope.isRecording = false;
                $scope.stopRecording = true;
                $scope.isDisabled = true;
                //todo stop recording
            } else {
                $scope.isRecording = true;
                //todo start recording
            }
        };

        $scope.submit = function () {
            //todo submit recording here

            $scope.isDisabled = false;
            $scope.stopRecording = false;
        };

        $scope.cancel = function () {
            // todo clear recorded contents
            $scope.isDisabled = false;
            $scope.stopRecording = false;

        };

    }]);
