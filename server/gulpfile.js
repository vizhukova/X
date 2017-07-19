var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('scss', function () {
    gulp.src('./styles/scss/*.scss')
        .pipe(sass(/*{outputStyle: 'compressed'}*/))
        .pipe(gulp.dest('./styles/css/'))
});

gulp.task('watch', function() {
    gulp.watch('./styles/scss/*.scss', ['scss']);
});
gulp.task('default', ["watch", 'scss']);