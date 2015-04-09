'use strict';

angular.module('f9Skills').directive('d3Bars', ['$window', '$timeout', 'd3Service',
	function ($window, $timeout, d3Service) {
		return {
			restrict: 'EA',
			scope: {
				data: '=data',
				colors: '=colors'
			},
			link: function (scope, element, attrs) {
				d3Service.d3().then(function (d3) {
					var margin = parseInt(attrs.margin) || 20,
						barHeight = parseInt(attrs.barHeight) || 20,
						barPadding = parseInt(attrs.barPadding) || 5;

					var svg = d3.select(element[0])
						.append('svg')
						.style('width', '100%');

					// Browser onresize event
					window.onresize = function () {
						scope.$apply();
					};

					// hard-code data
//					scope.data = [
//						{name: "AS3", score: 4},
//						{name: "JavaScript", score: 3},
//						{name: 'HTML5', score: 3},
//						{name: "CSS", score: 2}
//					];

					// Watch for resize event
					scope.$watch(function () {
						return angular.element($window)[0].innerWidth;
					}, function () {
						scope.render(scope.data);
					});

					scope.render = function (data) {
						// remove all previous items before render
						svg.selectAll('*').remove();

						// If we don't pass any data, return out of the element
						if (!data) {
							return;
						}
						// setup variables
						var width = d3.select(element[0]).node().offsetWidth - margin,
						// calculate the height
							height = scope.data.length * (barHeight + barPadding),
						// Use the category20() scale function for multicolor support
						//	color = d3.scale.category20(),
						// our xScale
							xScale = d3.scale.linear()
								.domain([0, d3.max(data, function (d) {
									return d.score;
								})])
								.range([0, width]);

						// set the height based on the calculations above
						svg.attr('height', height);

						svg.selectAll('rect')
							.data(data).enter()
							.append('rect')
							.attr('height', barHeight)
							.attr('width', 140)
							.attr('x', Math.round(margin / 2))
							.attr('y', function (d, i) {
								return i * (barHeight + barPadding);
							})
							.attr('fill', function (d) {
								return scope.colors[d.color - 1];
							})
							.transition()
							.duration(1000)
							.attr('width', function (d) {
								return xScale(d.score);
							});
						svg.selectAll('text')
							.data(data)
							.enter()
							.append('text')
							.attr('fill', '#AAAAAAA')
							.attr('y', function (d, i) {
								return i * (barHeight + barPadding) + 18;
							})
							.attr('x', 25)
							.attr('height', 36)
							.text(function (d) {
								return d.name + ' - ' + d.score;
							});
					};
				});
			}
		};
	}]);