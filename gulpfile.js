'use strict';

var gulp = require('gulp'),
clean = require('gulp-clean'),
sass = require('gulp-sass'),
concat = require('gulp-concat'),
pug = require('gulp-pug'),
autoprefixer = require('gulp-autoprefixer'),
browserSync = require('browser-sync').create(),
sourcemaps = require('gulp-sourcemaps'),
autoprefixerOptions = {browsers: ['last 2 versions', '> 5%', 'Firefox ESR']};

var src = './app';


gulp.task('clean', function () {
	return gulp.src('./dist/', {read: false})
	.pipe(clean());
});

gulp.task('image', function () {
	return gulp.src(src + '/images/**')
	.pipe(gulp.dest('dist/images'))
	.pipe(browserSync.stream());
});

gulp.task('fonts', () =>
gulp.src(src + '/scss/fonts/**')
.pipe(gulp.dest('dist/css/fonts'))
);

gulp.task('pages', function() {	
	gulp.src(src + '/*.pug')
	.pipe(pug({
		pretty: true
	}))
	.pipe(gulp.dest('./dist/'))
	.pipe(browserSync.stream());
});

gulp.task('sass', function () {
	return gulp.src(src + '/scss/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'compressed'}))
	.on('error', function(err){
		browserSync.notify(err.message, 3000);
		this.emit('end');
	})
	.pipe(autoprefixer(autoprefixerOptions))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./dist/css/'))
	.pipe(browserSync.stream());
});
gulp.task('scripts', function() {
	return gulp.src(src + '/js/*.js')
	.pipe(sourcemaps.init())
	.pipe(concat('main.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./dist/js'))
	.pipe(browserSync.stream());
});


gulp.task('serve', ['sass', 'pages','image', 'scripts', 'fonts'], function() {
	browserSync.init({
		server: "./dist"
	});
	gulp.watch(src + "/scss/**/*.scss", ['sass']);
	gulp.watch(src + '/**/*.pug', ['pages']);
	gulp.watch(src + '/images/', ['image']);
	gulp.watch(src + '/js/**.js', ['scripts']);
});

gulp.task('default', ['serve']);