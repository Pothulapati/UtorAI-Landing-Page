var del = require('del');
var gulp = require('gulp');
var clean_css = require('gulp-clean-css');
var connect = require('gulp-connect');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

/* Gulp Task Definitions */
gulp.task('clean', function(){
  return del('./dist/**/*');
});

gulp.task('css', function(){
  return gulp.src('./src/assets/scss/utorai.scss')
             .pipe(sass())
             .pipe(clean_css())
             .pipe(gulp.dest('./dist/assets/css/'));
});

gulp.task('js', function(){
  return gulp.src('./src/assets/js/*.js')
             .pipe(uglify())
             .pipe(gulp.dest('./dist/assets/js'));
});

gulp.task('img', function(){
  return gulp.src('./src/assets/img/*')
             .pipe(imagemin())
             .pipe(gulp.dest('./dist/assets/img'));
});

gulp.task('html', function(){
  return gulp.src('./src/index.html')
             .pipe(htmlmin({collapseWhitespace: true}))
             .pipe(gulp.dest('./dist/'));
});

gulp.task('reload', function(){
  return gulp.src('./dist/index.html')
             .pipe(connect.reload());
});

gulp.task('build', gulp.series('clean', gulp.parallel('css', 'js', 'img', 'html')));

gulp.task('serve', function() {
  connect.server({
    root: './dist',
    port: 8000,
    livereload: true
  });
  gulp.watch('./src/assets/scss/**/*.scss', gulp.series('css', 'reload'));
  gulp.watch('./src/assets/js/*.js', gulp.series('js', 'reload'));
  gulp.watch('./src/assets/img/**/*', gulp.series('img', 'reload'));
  gulp.watch('./src/index.html', gulp.series('html', 'reload'));
});

gulp.task('dev', gulp.series('build', 'serve'));