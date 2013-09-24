angular.module('myApp').filter('reverse', function () {
	return function (input) {
		return input.split('').reverse().join('');
	};
});