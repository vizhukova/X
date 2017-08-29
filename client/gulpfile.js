
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var htmlreplace = require('gulp-html-replace');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');
var buffer = require('vinyl-buffer');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');


var path = {
    HTML: './index.html',
    OUT: 'build.js',
    CSS_OUT: 'styles.css',
    DEST: '../server/public/client',
    VENDOR_ENTRY_POINT: './src/js/vendor.js',
    ENTRY_POINT: './src/js/app.js'
};

gulp.task('replaceHTML', function(){
    gulp.src(path.HTML)
        .pipe(gulp.dest(path.DEST));
});

gulp.task('js', function(){
    var b = browserify();
    b.transform("babelify", {presets: ["es2015", "stage-1", "react"]});
    b.add(path.ENTRY_POINT);
    return b.bundle()
        .pipe(source('build.js'))
        .pipe(buffer())
        .pipe(gulp.dest(path.DEST));
});

gulp.task('watch', function() {
    gulp.watch('./src/js/**/*.js', ['js']);
    gulp.watch('./../common/js/*.js', ['js']);
    gulp.watch('./src/scss/**/*.scss', ['sass']);
    gulp.watch('./../common/scss/*.scss', ['sass']);
    gulp.watch('./*.html', ['replaceHTML']);
});

gulp.task('sass', function () {
    gulp.src('./src/scss/app.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest(path.DEST))
});

gulp.task('res', function () {
    return gulp.src('./res/**')
        .pipe(gulp.dest(path.DEST + '/res'));
});

gulp.task('sass', function () {
    gulp.src('./src/scss/app.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest(path.DEST))
});

gulp.task('build', ['js', 'res', 'sass', 'replaceHTML']);

gulp.task('default', ["watch", 'js', 'sass', 'res', 'replaceHTML']);