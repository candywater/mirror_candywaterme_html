const gulp = require('gulp');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');

const webpack_config = './webpack.config.js'

function defaultTask(cb) {
  // place code for your default task here
  console.log("default")
  cb();
}

function sassTask(){
   return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
}

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

function webpackTask(){
  return gulp.src('./js/**/*.js')
    .pipe(webpack(require(webpack_config)))
    .pipe(gulp.dest('dist/'));
}

// exports = {
//   default: defaultTask,
//   sass: sass,
//   webpack: webpack,
// } 
exports.default = defaultTask
exports.sass = sassTask
exports.webpack = webpackTask
