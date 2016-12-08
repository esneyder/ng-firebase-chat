var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver'),
  typescript = require('gulp-typescript'),
  sourcemaps = require('gulp-sourcemaps'),
  tscConfig = require('./tsconfig.json');

  var appSrc = 'build/',
      tsSrc = 'process/typescript/';

gulp.task('js', function() {
  gulp.src('build/js/**/*');
});

gulp.task('html', function() {
  gulp.src('build/*.html');
});

gulp.task('css', function() {
  gulp.src('build/css/*.css');
});

gulp.task('copylibs', function() {
  return gulp
    .src([
      'node_modules/es6-shim/es6-shim.min.js',
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2/bundles/angular2.dev.js'
    ])
    .pipe(gulp.dest('build/js/lib/angular2'));
});

gulp.task('typescript', function () {
  return gulp
    .src(tsSrc + '**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(appSrc + 'js/'));
});

gulp.task('watch', function() {
  gulp.watch('build/js/**/*', ['js']);
  gulp.watch('build/css/*.css', ['css']);
  gulp.watch(['build/*.html',
    'build/views/*.html'], ['html']);
  gulp.watch(tsSrc + '**/*.ts', ['typescript']);
});

gulp.task('webserver', function() {
  gulp.src('build/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver','copylibs', 'typescript']);
