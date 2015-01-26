'use strict';

var secondApp = angular.module('secondApp', []);

secondApp.controller('SecondController', ['$scope', function($scope) {
    $scope.name = 'I`m the second app.';
}]);
