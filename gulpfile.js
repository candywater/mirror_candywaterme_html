const gulp = require('gulp');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');

const webpack_config = './webpack.config.js'
const webpack_config_test = './webpack.config.test.js'

function defaultTask(cb) {
  // place code for your default task here
  console.log("default")
  cb();
}

function sassTask(){
   return gulp.src('./scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
}

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

function webpackTask(){
  return gulp.src('./js/**/*.js')
    .pipe(webpack(require(webpack_config)))
    .pipe(gulp.dest('dist/'));
}
function webpackTaskTest(){
  return gulp.src('./js/**/*.js')
    .pipe(webpack(require(webpack_config_test)))
    .pipe(gulp.dest('dist/'));
}

// exports = {
//   default: defaultTask,
//   sass: sass,
//   webpack: webpack,
// } 
exports.default = gulp.parallel(sassTask, webpackTask)
exports.sass = sassTask
exports.webpack = webpackTask
exports.test = webpackTaskTest
