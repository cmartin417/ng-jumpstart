angular.module('myApp.filters', []);

angular.module('myApp.filters').filter('reverse', function () {
	return function (input) {
		return input.split('').reverse().join('');
	};
});