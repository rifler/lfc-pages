module.exports = function (grunt) {

    var prodDest = 'build/';
    var devDest = 'test/';

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/js/*.js']
        },

        concat: {
            jsDev: {
                src: 'src/js/*.js',
                dest: devDest + 'index.js'
            },
            jsProd: {
                src: 'src/js/*.js',
                dest: prodDest + 'index.js'
            }
        },

        uglify: {
            jsProd: {
                src: '<%= concat.jsProd.dest  %>',
                dest: '<%= concat.jsProd.dest  %>'
            }
        },

        stylus: {
            dev: {
                options: {
                    'compress': false
                },
                src: 'src/styl/*.styl',
                dest: devDest + 'index.css'
            },
            prod: {
                src: 'src/styl/*.styl',
                dest: prodDest + 'index.css'
            }
        },

        watch: {
            concat: {
                files: '<%= concat.jsDev.src %>',
                tasks: ['jshint', 'concat:jsDev']
            },
            stylus: {
                files: ['<%= stylus.dev.src %>'],
                tasks: 'stylus:dev'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('hint', ['jshint']);
    grunt.registerTask('testBuild', ['jshint', 'concat:jsDev', 'stylus:dev']);
    grunt.registerTask('build', ['jshint', 'concat:jsProd', 'uglify:jsProd', 'stylus:prod']);

};
