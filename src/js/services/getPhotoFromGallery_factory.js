angular.module("Angelhack.controllers.Main").factory("getPhotoFromGallery",
    ["$rootScope", "cordovaReady",
    function($rootScope, cordovaReady){
        return {
            getPhoto: cordovaReady(function(onSuccess,onError,options){
                window.alert("1");
                var configOption = options || {
                        quality: 100,
                        destinationType: Camera.DestinationType.FILE_URI,
                        sourceType: Camera.PictureSourceType.CAMERA,
                        encodingType: 1,
                        correctOrientation: true,
                        saveToPhotoAlbum: true,
                        targetWidth: 1600,
                        targetHeight: 1600
                    };
                navigator.camera.getPicture(
                    function(){
                        window.alert("2");
                        var that = this;
                        args = arguments;
                        if (onSuccess){
                            $rootScope.$apply(function(){
                                onSuccess.apply(that, args);
                            });
                        }
                    }, function(){
                        var that = this,
                            args = arguments;
                        window.alert("3");
                        if (onError) {
                            $rootScope.$apply(function(){
                                onError.apply(that, args);
                            });
                        }
                    }, configOption);
            })
        }
    }
]);