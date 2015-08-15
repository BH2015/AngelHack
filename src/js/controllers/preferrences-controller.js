angular.module('Angelhack.controllers.Main')

    .controller('PrefCtrl', ['$scope', function ($scope) {
        $scope.messages = {};
        $scope.isEditPersonal = false;

        $scope.name = "Rachel Eriksen";
        $scope.email = "rachel.eriksen@me.com";
        $scope.mobileNo = "+6590111222";

        $scope.enableEditPersonal = function () {
            $scope.isEditPersonal = true;
        };

        $scope.updatePersonals = function () {
            $scope.isEditPersonal = false;
            $scope.messages.success = "Your personal details are updated!";
        };

        $scope.contacts = [];

        $scope.contacts.push({icon: 'envelope', message: 'eric@yahoo.com', type: 'email'});
        $scope.contacts.push({icon: 'phone', message: '+65 90112890', type: 'phone'});
        $scope.contacts.push({icon: 'phone', message: '+65 88005271', type: 'phone'});
        $scope.contacts.push({icon: 'envelope', message: 'sam.86@live.com', type: 'email'});
        $scope.contacts.push({icon: 'envelope', message: 'paul.gofman@gmail.com', type: 'email'});

        $scope.contact = {};
        $scope.contact.type = 'email';
        $scope.addContacts = function () {
            var icon = ($scope.contact.type === 'email') ? 'envelope' : 'phone';
            var message = $scope.contact.newContact;
            var type = $scope.contact.type;
            $scope.contacts.push({icon: icon, message: message, type: type});
            $scope.newContact = '';
            $scope.messages.success = "Your emergency contact details are updated!";
        };

        $scope.deleteContact = function (contact) {
            var index = $scope.contacts.indexOf(contact);
            if (index > -1) {
                $scope.contacts.splice(index, 1);
            }
        };

        $scope.showDeleteIcon = function (contact) {
            contact['isDelete'] = true;
        };
        $scope.discoverable = true;

    }]);
