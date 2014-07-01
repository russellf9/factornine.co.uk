'use strict';

angular.module('f9App').controller('DateCtrl', ['$log', '$scope', '$document',
	function ($log, $scope, $document) {
		//$log.info('A DateCtrl: modified: ',document.lastModified);

		var date = document.lastModified.toString();

		var format = 'dddd, MMMM Do YYYY, h:ma';

		//$log.info('B DateCtrl: modified: ',date.toString());

		var eventDateInUtc = moment.tz(date, 'Europe/London').utf.format(format);

		//$log.info('C DateCtrl: modified: eventDateInUtc: ',eventDateInUtc.toString());
		var newDate = eventDateInUtc.toString()

		$scope.date = eventDateInUtc;

		// TODO the offset seems to be opposite!

	}]);