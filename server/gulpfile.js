var gulp = require('gulp');
var sass = require('gulp-sass');
// var browserify = require('browserify');
// var babelify = require('babelify');
// var source = require('vinyl-source-stream');
// var buffer = require('vinyl-buffer');

gulp.task('scss', function () {
    gulp.src('./styles/scss/*.scss')
        .pipe(sass(/*{outputStyle: 'compressed'}*/))
        .pipe(gulp.dest('./styles/css/'))
});

gulp.task('watch', function() {
    gulp.watch('./styles/scss/*.scss', ['scss']);
});
gulp.task('default', ["watch", 'scss']);