'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	svgstore = require('gulp-svgstore'),
	svgmin = require('gulp-svgmin'),
	autoprefixer = require('gulp-autoprefixer'),
  rename = require('gulp-rename'),
  svgstore = require('gulp-svgstore'),
  svgmin = require('gulp-svgmin');

gulp.task('prod', function() {
   return gulp.src('./src/styles.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(autoprefixer({
    	browsers: ['> 5%', 'last 3 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./src/assets/css'));
});

gulp.task('sass', function () {
  return gulp.src('./src/styles.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('**/styles.scss', ['sass']);
});

gulp.task('sprite', function () {
  return gulp.src('./src/assets/*.svg')
    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(gulp.dest('./src/assets/'));
});

gulp.task('prefix', function () {
	return gulp.src('./src/assets/css/styles.css')
		.pipe(autoprefixer({
    	browsers: ['> 5%', 'last 3 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./src/assets/css'));
});

gulp.task('sprite', function () {
  return gulp.src(['src/assets/icons/*.svg'])
    .pipe(svgmin())
    .pipe(rename({ prefix: 'i-' }))
    .pipe(svgstore())
    .pipe(gulp.dest('src/assets/icons'));
});