'use strict';

angular.module('f9Skills').controller('SkillsCtrl', ['$log', '$scope',
	function ($log, $scope) {

		/**
		 * 1 Programming Language
		 * 2 Framework
		 * 3 Subject Area
		 * 4 Tool
		 * 5 Design / Markup - was #6E003E | 8E 10 5E
		 * #00E316
		 */
		$scope.colors = ['#ff7f0e','#3CB03C','#306983','#F7EA1E','#8E205E'];

		$scope.data = [
			{name: 'Angular.js', score: 4, color:2},
			{name: 'JavaScript', score: 3, color:1},
            {name: 'Gulp', score: 4, color:4},
			{name: 'GIT', score: 3, color:4},
            {name: 'PhoneGap/Ionic', score:4, color:4},
            {name: 'HTML5', score: 4, color:5},
            {name: 'CSS3', score: 4, color:5},
            {name: 'MVC', score: 4, color:2},
			{name: 'Yeoman', score: 2, color:4},
			{name: 'Twitter Bootstrap', score: 3, color:5},
			{name: 'd3', score: 1, color:5},
            {name: 'Grunt', score: 3, color:4},
			{name: 'UNIX', score: 2,  color:1},
			{name: 'SAAS', score: 2, color:5},
			{name: 'UI/UX', score: 4, color:3},
			{name: 'Jasmine - JS Unit Testing', score:2, color:4},
			{name: 'E-learning', score: 5, color:3},
			{name: 'iOS', score: 1, color:3},
			{name: 'Objective-C', score: 1, color:1},
			{name: 'Flex', score: 2, color:1},
			{name: 'AS3', score: 5, color:1},
			{name: 'ANT', score: 2, color:4},
			{name: 'Design Patterns', score: 3, color:2},
			{name: 'SVN', score: 3, color:4}
		];

		$scope.animate = function() {
			$log.info('SkillsCtrl::Animate!');
		};


	}]);
