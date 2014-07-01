'use strict';

angular.module('f9App').directive('bars', function ($parse) {
	return {
		restrict: 'E',
		replace: true,
		template: '<div id="chart"></div>',
		link: function (scope, element, attrs) {
			var data = attrs.data.split(','),
				chart = d3.select('#chart')
					.append("div").attr("class", "chart")
					.selectAll('div')
					.data(data).enter()
					.append("div")
					.transition().ease("elastic")
					.style("width", function(d) { return ( d * 10) + "%"; })
					.text(function(d) { return d; });

			console.log('data: ', data);
		}
	};
});