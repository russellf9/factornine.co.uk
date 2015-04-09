'use strict';

angular.module('carousel').animation('.toggle', function() {
	return {
		leave: function (element, done) {
			TweenMax.fromTo(element, 0.5, {opacity: 1.0}, {opacity: 0.00, onComplete: done});
		},
		enter: function (element, done) {
			TweenMax.fromTo(element, 0.5, {opacity: 0}, {opacity: 1.00, onComplete: done});
		}
	};
});