var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
gulp.task('browser-sync', function () {
  browserSync.init({
    server:{
      baseDir:"./"
    }
  });
});
gulp.task('style', function () {
  return gulp.src('./styles/**/*.scss').pipe(sass().on('error, sas.logError')).pipe(gulp.dest('./dist/styles'));
});
