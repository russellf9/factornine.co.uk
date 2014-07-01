'use strict';

angular.module('f9App').directive('barChart', function ( ) {
	return {
		restrict: 'E',
		scope: {
			data: '='
		},
		link: function (scope, element, attrs) {
			var width = 400;
			var height = 200;
			var chart = d3.select(element[0])
				.append('svg:svg')
				.attr('width', width)
				.attr('height', height);
		}
	};
});