module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-prettier');

  grunt.initConfig({
    prettier: {
      options: {
        jsxSingleQuote: true,
        singleQuote: true,
        printWidth: 120,
        tabWidth: 2,
        semi: true
      },
      files: {
        src: ['*.js', 'src/**/*.js', 'src/**/*.jsx']
      }
    },
    eslint: {
      target: ['*.js', 'src/**/*.js', 'src/**/*.jsx']
    },
    run: {
      options: {
        // ...
      },
      npm_start: {
        exec: 'npm run start'
      }
    }
  });

  grunt.registerTask('default', ['prettier', 'eslint', 'run:npm_start']);
};
