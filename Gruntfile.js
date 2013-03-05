module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/js/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('test', ['jshint']);

};
