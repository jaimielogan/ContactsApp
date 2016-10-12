var app = angular.module('ContactsApp', []);

app.controller('MainController', function($scope){
  $scope.contacts = [];
  $scope.newContact = {};
  $scope.addContact = function(){
    $scope.contacts.push({name: $scope.newContact.name, email: $scope.newContact.email, phone: $scope.newContact.phone});
    $scope.newContact.name = '';
    $scope.newContact.email = '';
    $scope.newContact.phone = ''; 
  };
});
