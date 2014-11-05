'use strict';

angular.module('f9App').controller('DateCtrl', ['$log', '$scope',
	function ($log, $scope) {
		//$log.info('A DateCtrl: modified: ',document.lastModified);

		var date = document.lastModified.toString();

		var format = 'dddd, MMMM Do YYYY, h:mma';

		//$log.info('B DateCtrl: modified: ',date.toString());

		var eventDateInUtc = moment.tz(date, 'Europe/London').format(format);

		$scope.date = eventDateInUtc;

		// TODO the offset seems to be opposite!

	}]);