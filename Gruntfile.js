'use strict';
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		checkDependencies: {
	        this: {
	            options: {
	                install: true,
	            },
	        },
	    },
		// running `grunt less` will compile once
		less: {
			development: {
				options: {
					paths: ["./css"],
					compress: true
				},
				files: {
					"./css/styles.css": "./css/styles64.less"
				}
			},
		},
		// base64 encode imagefiles into CSS
		imageEmbed: {
		    dist: {
		      src: [ "./css/styles.less" ],
		      dest: "css/styles64.less",
		      options: {
		        deleteAfterEncoding : false,
		        maxImageSize : 0,
		        preEncodeCallback: function (filename) { return true; }
		      }
		    }
		  },
		// Insert minified code -> ./index.html
		replace: {
		  	insertugly: {
			    src: ['./source/index.html',],
				dest: './index.html',
				replacements: [{
					from: '-UGLYCSSGOESHERE-',
					to: '<%= grunt.file.read("./css/styles.css") %>'
				},{
					from: '-UGLYJSGOESHERE-',
					to: '<%= grunt.file.read("./js/script.js.min") %>'
				}]
			},
		},
		// Minify JS
		uglify: {
		js: {
			src: ["./js/*.js"],
			dest: "./js/script.js.min"
		}
		},
	// running `grunt watch` will watch for changes
	watch: {
		files: "./css/styles.less",
		tasks: ["imageEmbed","less","uglify","replace"]
	},
});
	grunt.registerTask('check', ['checkDependencies',]);
	grunt.registerTask('jsmin', ['uglify',]);
	grunt.loadNpmTasks('grunt-check-dependencies');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-image-embed');
	grunt.loadNpmTasks('grunt-text-replace');
};