module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks("grunt-systemjs-builder");
  grunt.loadNpmTasks('grunt-usemin');

  grunt.initConfig({
    useminPrepare: {
      options: {
        dest: 'dist/client'
      },
      html: 'src/client/index.html'
    },
    usemin: {
      html: 'dist/client/index.html'
    },
    clean: {
      preDist: ['dist/*'],
      postDist: ['.tmp']
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['client/*.html', 'client/config.js', 'client/jspm_packages/system.js'],
          dest: 'dist/'
        }]
      }
    },
    systemjs: {
      options: {
        sfx: false,
        baseURL: "./src/client",
        configFile: "./src/client/config.js",
        minify: true,
        build: {
          mangle: false
        }
      },
      dist: {
        files: [{
          src:  "./src/client/js/app.js",
          dest: "./dist/client/js/app.js"
        }]
      }
    }
  });

  grunt.registerTask('dist', [
    'clean:preDist',
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'copy:dist',
    'usemin',
    'systemjs:dist',
    'clean:postDist'
  ]);
};
