'use strict';
module.exports = function(grunt) {
	grunt.initConfig({
		// running `grunt less` will compile once
		less: {
			development: {
				options: {
					paths: ["./css"],
					compress: true
				},
				files: {
					"./css/styles.css": "./css/styles.less"
				}
			},

		},
	// running `grunt watch` will watch for changes
	watch: {
		files: "./css/*.less",
		tasks: ["less"]
	},
	uglify: {
		js: {
			src: ["./js/jquery.js", "./js/flipclock.js", "./js/script.js"],
			dest: "./js/script.min.js"
		}
	}
});
	grunt.registerTask('jsmin', ['uglify']);
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
};