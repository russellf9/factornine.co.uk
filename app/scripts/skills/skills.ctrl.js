'use strict';

angular.module('f9App').controller('SkillsCtrl', ['$log', '$scope',
	function ($log, $scope) {

		$scope.data='1,4,2,2,5,4,4,2';

		$scope.skills='AS3,UNIX,GIT,JavaScript,Angular.js,Grunt,Yeoman,iOS Developemnt,';

		$scope.newData = JSON.stringify({ 'AS3':4, 'GIT':2 });

	}]);