'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/**/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                node: true
            }
        },
        clean: {
            tests: 'test/expected'
        },
        antlr4: {
            test: {
                grammar: 'test/resources/JSON.g4',
                options: {
                    o: '<%= clean.tests %>',
                    grammarLevel: {
                        language: 'JavaScript'
                    },
                    flags: [
                        'visitor'
                    ]
                }
            }
        },
        nodeunit: {
            tests: 'test/src/**/*.js'
        }
    });

    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    grunt.registerTask('test', ['antlr4', 'nodeunit', 'clean']);
    grunt.registerTask('default', ['jshint', 'test']);

};
