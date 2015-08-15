angular.module("Angelhack.controllers.Main").factory("recordAudio",
    ["$rootScope", "cordovaReady",
        function($rootScope, cordovaReady){
            var src = "myrecording.mp3";
            var mediaRec = new Media(src, function(){
                //window.alert("Media recording success 1");
            }, function(){
               // window.alert("Media recording fail 2");
            });
            var recTime = 0;
            return {
                startAudioRecording: cordovaReady(function(onSuccess,onError){

                    // Record audio
                    mediaRec.startRecord();
                }),
                stopAudioRecording: cordovaReady(function(onSuccess,onError){

                    // Record audio
                    mediaRec.stopRecord();

                }),
                resetAudioRecording: cordovaReady(function(onSuccess,onError){

                    // Record audio
                    mediaRec.release();
                }),
                uploadAudioRecording: cordovaReady(function(onSuccess,onError){

                    var fileMime = 'audio/mp3',
                        uploadURL='https://api.idolondemand.com/1/api/sync/storeobject/v1';

                    var win = function (r) {
                        console.log("Code = " + r.responseCode);
                        console.log("Response = " + r.response);
                        console.log("Sent = " + r.bytesSent);
                        mediaRec.release();
                        var that = this,
                            args = arguments;
                        if (onSuccess){
                            $rootScope.$apply(function(){
                                onSuccess.apply(that, args);
                            });
                        }
                    };

                    var fail = function(error) {
                        //window.alert("An error has occurred: Code = " +  error.code);
                        mediaRec.release();
                    };

                    // file system fail
                    var fsFail = function(error) {
                        mediaRec.release();

                    };

                    var dirFail = function(error) {
                        mediaRec.release();
                    };

                    var fileURI = "/storage/sdcard/" + src;

                    var gotFileSystem = function (fileSystem) {
                        var options = new FileUploadOptions();
                        options.fileKey = "file";
                        options.fileName = src;
                        options.mimeType = fileMime;

                        options.params = { 'apikey': '0a9f1ae2-e1e1-4c0b-bd08-c28cbed4cf0d'};

                        var ft = new FileTransfer();
                        ft.upload(fileURI, encodeURI(uploadURL), win, fail, options);

                    };

                    // get file system to copy or move image file to
                    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFileSystem, fsFail);

                })
            }
        }
    ]);