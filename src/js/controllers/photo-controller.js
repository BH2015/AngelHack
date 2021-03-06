angular.module('Angelhack.controllers.Main')
    .controller('PhotoCtrl', ["$scope", "getPhotoFromGallery", "fileTransfer", "RemoteCommService",
        function ($scope, getPhotoFromGallery, fileTransfer, RemoteCommService) {
            $scope.messages = {};

            $scope.startCapture = function () {
                getPhotoFromGallery.getPhoto(function (photo) {
                    fileTransfer.uploadPhoto(function () {
                        var args = arguments;
                        RemoteCommService.submitImageReference(args[0]['response'], function () {
                            $scope.messages.success = "Your incident is reported";
                        }, function () {
                            $scope.messages.error = "Unable to upload your incident right now. Please try again";
                            //todo save request and re-try later
                        });
                    }, function () {
                        $scope.messages.error = "Unable to upload your incident right now. Please try again";
                        //todo save request and re-try later
                    }, photo);
                });
            };
        }]);