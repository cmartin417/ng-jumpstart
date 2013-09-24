angular.module('myApp', [
	'myApp.controllers', 
	'myApp.services', 
	'myApp.filters', 
	'myApp.directives'
]);

angular.module('myApp').config(function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/home',
			controller: 'HomeCtrl'
		})
		.when('/view1', {
			templateUrl: 'views/view1',
			controller: 'View1Ctrl'
		})
		.when('/view2', {
			templateUrl: 'views/view2',
			controller: 'View2Ctrl'
		})
		.otherwise({
			redirectTo: '/'
		});

	$locationProvider.html5Mode(true);
});