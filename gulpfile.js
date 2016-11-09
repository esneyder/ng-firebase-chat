var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver');

gulp.task('js', function() {
  gulp.src('build/js/**/*');
});

gulp.task('html', function() {
  gulp.src('build/*.html');
});

gulp.task('css', function() {
  gulp.src('build/css/*.css');
});

gulp.task('watch', function() {
  gulp.watch('build/js/**/*', ['js']);
  gulp.watch('build/css/*.css', ['css']);
  gulp.watch(['build/*.html',
    'build/views/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('build/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
