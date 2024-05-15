const gulp = require('gulp')
const purgecss = require('gulp-purgecss')
const sourcemaps = require('gulp-sourcemaps')
var autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sass = require('gulp-sass')(require('sass'));

const SCSS_ENTRIES = ["./src/sass/main.scss", "./src/sass/about.scss", "./src/sass/layout.scss"]
const MINIMACSS_DIR_PATH = ["./src/sass/**/*.scss"]
const MINIMACSS_OUTPUT = './public/build/sass'
const DIST_CSS_OUTPUT = './dist/build/sass'

function main_dev() {
    return gulp.src(SCSS_ENTRIES)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(MINIMACSS_OUTPUT))
        .pipe(gulp.dest(DIST_CSS_OUTPUT))
}

function complier_main_prod() {
    var plugins = [
        cssnano(),
    ];
    return gulp.src(SCSS_ENTRIES)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        // .pipe(purgecss({
        //     content: ["src/**/*.svelte"]
        // }))
        .pipe(postcss(plugins))
        // .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(MINIMACSS_OUTPUT))
        .pipe(gulp.dest(DIST_CSS_OUTPUT))
}

function main_watch() {
    gulp.watch(MINIMACSS_DIR_PATH, main_dev);
}

exports.default = gulp.series(complier_main_prod);
exports.dev = gulp.series(main_dev);
exports["watch"] = gulp.parallel(main_watch)

