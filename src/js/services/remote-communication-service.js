angular.module("Angelhack.controllers.Main")
    .service('RemoteCommService', ['getCurrentPosition','$http', function (getCurrentPosition,$http) {

        var serverUrl = 'http://crimepush.taskizer.com';

        this.submitImageReference = function (reference, success, error) {

            $http.post(serverUrl + '/images', reference).success(success).error(error);

            /*getCurrentPosition(function (position) {
                window.alert("INSIDE 1 ");
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
                var coordinates = [lng, lat];
                var referenceData = {
                    reference: reference,
                    type: 'image',
                    coordinates: coordinates
                };
                $http.post(serverUrl + '/images', referenceData).success(success).error(error);
            });*/
        };

        this.submitVoiceReference = function (reference, success, error) {
            $http.post(serverUrl + '/voice', reference).success(success).error(error);

           /* getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
                var coordinates = [lng, lat];
                var referenceData = {
                    reference: reference,
                    type: 'voice',
                    coordinates: coordinates
                };
                $http.post(serverUrl + '/voice', referenceData).success(success).error(error);
            });*/
        };

        this.submitTextReference = function (reference, success, error) {
            $http.post(serverUrl + '/text', reference).success(success).error(error);

            /*getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
                var coordinates = [lng, lat];
                var referenceData = {
                    reference: reference,
                    type: 'text',
                    coordinates: coordinates
                };
                $http.post(serverUrl + '/text', referenceData).success(success).error(error);
            });*/
        };

    }]);