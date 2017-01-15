"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');

gulp.task('default', function() {
  return console.log('Gulp is running!');
});

// SASS
var sassPaths = {
  scss: './scss/**/*.scss',
  css: './css/'
};

gulp.task('sass', function(){
  return gulp.src(sassPaths.scss)
    .pipe(sass.sync())
    .pipe(gulp.dest(sassPaths.css));
});

// BABEL
var babelPaths ={
  buildPath: './build',
  JSPath: './js/**/*.js'
};

gulp.task('babel', function() {
  return gulp.src(babelPaths.JSPath)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(babelPaths.buildPath));
});

gulp.task('watch', function(){
  gulp.watch(['./scss/**/*.scss',babelPaths.JSPath], ['sass','babel']);
  // Other watchers
});
