/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Task configuration.
        gruntfile: {
            src: 'Gruntfile.js'
        },
        stylus: {
            compile: {
                options: {
                    paths: ['src/mixins'],
                    compress: false
                },
                files: {
                    'release/input.css': ['src/copyright.styl', 'src/input.styl']
                }
            },
            minify: {
                options: {
                    paths: ['src/mixins'],
                    compress: true
                },
                files: {
                    'release/input-min.css': ['src/copyright.styl', 'src/input.styl']
                }
            }
        },
        nodeunit: {
            tests: ['test/*_test.js']
        },
        watch: {
            files: 'src/*.styl',
            tasks: ['default']
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Default task.
    grunt.registerTask('default', ['stylus:compile', 'stylus:minify', 'nodeunit']);

};