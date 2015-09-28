'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

//run the app packed in the dist folder
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});
