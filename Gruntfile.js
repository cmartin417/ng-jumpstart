module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
		jasmine: {
			unit: {
				src: 'public/js/**/*.js',
				options: {
					specs: [
						'test/**/*.test.js'
					],
					vendor: [
						'public/vendor/angular/angular.js',
						'public/vendor/angular-mocks/angular-mocks.js'
					]
				}	
			}
		}
	});

	grunt.loadNpmTasks('grunt-recess');
	grunt.loadNpmTasks('grunt-contrib-jasmine');

	grunt.registerTask('default', ['jasmine']);
};