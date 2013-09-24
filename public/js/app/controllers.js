var appControllers = angular.module('myApp.controllers', []);

angular.module('myApp.controllers').controller('AppCtrl', function ($scope) {
	console.log('view 2');
});

angular.module('myApp.controllers').controller('HomeCtrl', function ($scope) {
	console.log('home');
});

angular.module('myApp.controllers').controller('View1Ctrl', function ($scope) {
	console.log('view 1');
});

angular.module('myApp.controllers').controller('View2Ctrl', function ($scope) {
	console.log('view 2');
});