'use strict';

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('images', [], function() {
  return gulp
    .src(['src/img/**/*'], {base: './src'})
    .pipe(imagemin([
      imagemin.jpegtran(),
      imagemin.optipng(),
      imagemin.svgo({js2svg: {regEntities: /[&"<>]/g}}),
    ]))
    .pipe(gulp.dest('build'));
});

gulp.task('vendor', [], function() {
  return gulp.src([
    'bower_components/angular-slidedeck/angular-slidedeck.min.*',
  ], {base: './bower_components'})
    .pipe(gulp.dest('build/vendor'));
});
