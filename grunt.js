module.exports = function(grunt) {
  grunt.initConfig({
    coffee: {
      app: {
        src: ['src/TB.diagnostic.coffee'],
        dest: '.',
        options: {
          bare: false
        }
      }
    },
    min: {
      dist: {
        src: ["TB.diagnostic.js"],
        dest: "TB.diagnostic.min.js"
      }
    },
    watch: {
      files: '<config:coffee.app.src>',
      tasks: 'default'
    }
  });

  grunt.loadNpmTasks('grunt-growl');
  grunt.loadNpmTasks('grunt-coffee');
  grunt.registerTask('default', 'coffee');
  grunt.registerTask('precompile', 'coffee min');
};
