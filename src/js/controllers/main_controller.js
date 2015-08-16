angular.module('Angelhack.controllers.Main', [])
    .controller('MainCtrl', ["$scope","getPhotoFromGallery","fileTransfer", "RemoteCommService",
        function ($scope,getPhotoFromGallery,fileTransfer, RemoteCommService) {
        $scope.messages = {};
        $scope.activateBurstMode = function () {
            getPhotoFromGallery.getPhoto(function(photo) {
                fileTransfer.uploadPhoto(function() {
                    var args = arguments;
                    RemoteCommService.submitImageReference(args[0]['response'], function () {
                        $scope.messages.success = "Your incident is reported";
                    }, function () {
                        $scope.messages.error = "Unable to upload your incident right now. Please try again";
                        //todo save request and re-try later
                    });
                },function() {
                    $scope.messages.error = "Unable to upload your incident right now. Please try again";
                    //todo save request and re-try later
                },photo);
            });
        };

        $scope.userName = "Hello Jane Doe";

        $scope.chatUsers = [
            {name: 'Carlos  Flowers', online: true},
            {name: 'Byron Taylor', online: true},
            {name: 'Jana  Terry', online: true},
            {name: 'Darryl  Stone', online: true},
            {name: 'Fannie  Carlson', online: true},
            {name: 'Holly Nguyen', online: true},
            {name: 'Bill  Chavez', online: true},
            {name: 'Veronica  Maxwell', online: true},
            {name: 'Jessica Webster', online: true},
            {name: 'Jackie  Barton', online: true},
            {name: 'Crystal Drake', online: false},
            {name: 'Milton  Dean', online: false},
            {name: 'Joann Johnston', online: false},
            {name: 'Cora  Vaughn', online: false},
            {name: 'Nina  Briggs', online: false},
            {name: 'Casey Turner', online: false},
            {name: 'Jimmie  Wilson', online: false},
            {name: 'Nathaniel Steele', online: false},
            {name: 'Aubrey  Cole', online: false},
            {name: 'Donnie  Summers', online: false},
            {name: 'Kate  Myers', online: false},
            {name: 'Priscilla Hawkins', online: false},
            {name: 'Joe Barker', online: false},
            {name: 'Lee Norman', online: false},
            {name: 'Ebony Rice', online: false}
        ];

    }]);