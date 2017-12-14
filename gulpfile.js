var gulp = require('gulp');
var sass = require('gulp-sass');

var sassFiles = 'assets/styles/sass/**/*.scss';
var cssDest = 'assets/styles/css/';

gulp.task('styles', function(){
    gulp.src(sassFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});

gulp.task('watch', function(){
    gulp.watch(sassFiles, ['styles']);
});