module.exports = function(grunt) {
  grunt.initConfig({
    coffee: {
      dist: {
        src: ['src/TB.diagnostic.coffee'],
        dest: 'tmp',
        options: {
          bare: false
        }
      }
    },
    concat: {
      dist: {
        src: ["lib/**/*.js", "tmp/**/*.js"],
        dest: "TB.diagnostic.js"
      }
    },
    min: {
      dist: {
        src: ["TB.diagnostic.js"],
        dest: "TB.diagnostic.min.js"
      }
    },
    watch: {
      files: '<config:coffee.dist.src>',
      tasks: 'default'
    }
  });

  grunt.loadNpmTasks('grunt-growl');
  grunt.loadNpmTasks('grunt-coffee');
  grunt.registerTask('default', 'coffee concat');
  grunt.registerTask('precompile', 'default min');
};
