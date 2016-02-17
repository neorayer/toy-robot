'use strict'

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['src/*.js'],
            options: {
                laxcomma: true,     
                shadow: true,      
                asi: true,        
                strict: true,    
                node: true,     
                newcap: false, 
                quotmark: true,
            }
        },
    });

    grunt.option('force', true);

    //grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('jshint', ['hshint']);
};
