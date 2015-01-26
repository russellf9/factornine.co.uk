'use strict';

var secondApp = angular.module('secondApp', []);

secondApp.controller('SecondController', function($scope) {
    $scope.name = 'I`m the second app.';
});
