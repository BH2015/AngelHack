angular.module('Angelhack.controllers.Main')

    .controller('VoiceCtrl', ['$scope','recordAudio','RemoteCommService',
        function ($scope,recordAudio,RemoteCommService) {
        $scope.messages = {};
        $scope.isRecording = false;
        $scope.isDisabled = false;
        $scope.controlVoiceRecording = function () {
            if ($scope.isRecording) {
                $scope.isRecording = false;
                $scope.stopRecording = true;
                $scope.isDisabled = true;
                //Stop audio recording
                recordAudio.stopAudioRecording();
            } else {
                $scope.isRecording = true;
                //Start audio recording
                recordAudio.startAudioRecording();
            }
        };

        $scope.submit = function () {
            //Submit recording here
            recordAudio.uploadAudioRecording(function(){
                var args = arguments;
                RemoteCommService.submitVoiceReference(args[0]['response'], function () {
                    $scope.messages.success = "Your incident is reported";
                }, function () {
                    window.alert('uploaded voices failed');
                    $scope.messages.error = "Unable to upload your incident right now. Please try again";
                    //todo save request and re-try later
                });

            },function() {
                $scope.messages.error = "Unable to upload your incident right now. Please try again";
                //todo save request and re-try later
            });

            $scope.isDisabled = false;
            $scope.stopRecording = false;
        };

        $scope.cancel = function () {
            // todo clear recorded contents
            $scope.isDisabled = false;
            $scope.stopRecording = false;

        };

    }]);
