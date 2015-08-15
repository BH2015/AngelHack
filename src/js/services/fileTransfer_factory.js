angular.module("Angelhack.controllers.Main").factory("fileTransfer",
    ["$rootScope", "cordovaReady",
        function($rootScope, cordovaReady){
            return {
                uploadPhoto: cordovaReady(function(onSuccess,onError,fileURI){
                    var win = function(res) {
                        var that = this,
                            args = arguments;
                        if (onSuccess){
                            $rootScope.$apply(function(){
                                onSuccess.apply(that, args);
                            });
                        }
                    };

                    var fail = function(error) {var that = this,
                        args = arguments;
                            if (onError) {
                            $rootScope.$apply(function(){
                                onError.apply(that, args);
                            });
                        }
                    };

                    var formURL = 'https://api.idolondemand.com/1/api/sync/storeobject/v1';
                    var encodedURI = encodeURI(formURL);
                    var imgData = readFileAsBinaryString(fileURI);
                    var options = new FileUploadOptions();
                    options.fileKey = "file";
                    options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
                    options.params = { 'apikey': '0a9f1ae2-e1e1-4c0b-bd08-c28cbed4cf0d', 'file': imgData, 'mode': 'scene_photo' };
                    var ft = new FileTransfer();
                    ft.upload(fileURI, encodedURI, win, fail, options);
                })
            }
        }
    ]);


function readFileAsBinaryString(file) {
    var reader = new FileReader();
    reader.onloadend = function(evt) {
        var imgData = evt.target.result;
        return imgData;
    };
    reader.onerror = function(evt) {
    };
    reader.readAsBinaryString(file);
}