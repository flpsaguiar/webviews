/* eslint-disable */

'use strict';

const ENV = process.env.NODE_ENV || 'development';

const gulp          = require('gulp'),
      util          = require('gulp-util'),
      gulpPlugins   = require('gulp-load-plugins'),
      sass          = require('gulp-sass'),
      imagemin      = require('gulp-imagemin'),
      browserSync   = require('browser-sync'),
      reload        = browserSync.reload,
      $             = gulpPlugins(),
      runSequence   = require('run-sequence'),
      appConstants  = require('./public/constants.js'),
      fs            = require('fs');

const production = false;

const isDev         = ( ENV === 'development' ),
      isProduction  = ( ENV === 'production' );

/* Markup
=============================================================================== */

gulp.task('markup', function() {
  return gulp.src([
      './public/src/**/*.html'
    ])
    .pipe(gulp.dest( './public/dist' ))
    .pipe( reload({ stream: true }) );
});

/* CSS
=============================================================================== */

gulp.task('styles', function() {
  var options = {
    'errLogToConsole' : true,
    'outputStyle'     : 'expanded'
  };

  return gulp.src([
      './public/src/styles/core.scss'
    ])
    .pipe($.plumber())
    .pipe(sass( options ).on('error', sass.logError))
    .pipe($.rename({ suffix: '.min' }))
    .pipe(gulp.dest( './public/dist/css' ))
    .pipe(reload({ stream: true }));
});


gulp.task('css-vendors', function() {
  return gulp.src([
	// './node_modules/toastr/toastr.css'
  ])
    .pipe($.concat( 'vendors.css' ))
    .pipe($.rename({ suffix: '.min' }))
    .pipe(gulp.dest( './public/dist/css' ));
});


/* JavaScript
=============================================================================== */

gulp.task('js', function() {
  var baseDir = './public/src/js/';
  var files = [
    `${baseDir}app.module.js`,
    `${baseDir}app.constants.js`,
    `${baseDir}**/*.module.js`,
    '../commons/js/**/*.module.js',
    `${baseDir}app.**.js`,
    `${baseDir}**/*.js`,
    '../commons/js/**/*.js'
  ];

  return gulp
    .src(files)
    .pipe($.plumber())
    .pipe($.concat('app.js'))
    // .pipe( isProduction ? $.uglify({ compress: { drop_console: true }}) : $.util.noop())
    .pipe($.rename({ suffix: '.min' }))
    .pipe(gulp.dest('./public/dist/js'))
    .pipe(reload({ stream: true }));
});

gulp.task('js-vendors', function() {
  return gulp.src([
    /* Angular
    =============================================================================== */
    './node_modules/angular/angular.min.js',
	'./node_modules/angular-ui-router/release/angular-ui-router.js',

    './node_modules/jquery/dist/jquery.min.js',
    // './node_modules/toastr/toastr.min.js',
  ])
    .pipe($.concat( 'vendors.js' ))
    // .pipe( isProduction ? $.uglify({ compress: { drop_console: true }}) : $.util.noop())
    .pipe($.rename({ suffix: '.min' }))
    .pipe(gulp.dest( './public/dist/js' ));
});

/* Assets
=============================================================================== */

gulp.task('images', function() {
  return gulp.src( './public/src/img/**/*' )
    .pipe( isProduction ? imagemin() : util.noop() )
    .pipe(gulp.dest( './public/dist/img' ))
    .pipe(reload({ stream: true }));
});

gulp.task('fonts', function() {
  return gulp.src( './public/src/fonts/*' )
    .pipe(gulp.dest( './public/dist/fonts' ))
    .pipe(reload({ stream: true }));
});


/* Constants
=============================================================================== */

gulp.task('constants', () => {
  fs.writeFileSync(
    './public/src/app.constants.json',
    JSON.stringify(appConstants(ENV))
  );

  return gulp.src('./public/src/app.constants.json')
    .pipe($.ngConfig('stocksApp', {
      createModule : false,
      pretty       : true,
      wrap         : true
    }))
    .pipe(gulp.dest( './public/src/js/' ));
});

/* Gulp
=============================================================================== */

gulp.task('watch', function() {
  browserSync.init({
    notify: false,
    server: './public/dist'
  });

  gulp.watch([
    './public/src/styles/**/*.scss'
  ], [ 'styles' ]);

  // gulp.watch('../commons/images/**/*', [ 'images' ]);
  gulp.watch([
    './public/src/js/**/*.js',
    '../commons/js/**/*.js'
  ], [ 'js' ]);

  gulp.watch([
    './public/src/**/*.html'
  ], [ 'markup' ]);

});

/* Dev
=============================================================================== */

gulp.task('default', () => {
  runSequence('constants', [
    'markup',
    'js-vendors',
    'js',
    'images',
    'fonts',
    'styles',
    'css-vendors',
    'watch'
  ]);
});

gulp.task('serve', () => {
  runSequence('constants', [
    'markup',
    'js-vendors',
    'js',
    'images',
    'fonts',
    'styles',
    'css-vendors',
    'watch'
  ]);
});


gulp.task('build', () => {
  runSequence('constants', [
    'markup',
    'js-vendors',
    'js',
    'images',
    'fonts',
    'styles',
    'css-vendors'
  ]);
});
