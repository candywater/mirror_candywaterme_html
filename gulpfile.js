const gulp = require('gulp')
const purgecss = require('gulp-purgecss')
const sourcemaps = require('gulp-sourcemaps')
// var autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sass = require('gulp-sass')(require('sass'));
const tailwindcss = require('tailwindcss');
const tailwindConfig = require("./tailwind.config.js");

// animate.css
// const ANIMATE_PATH = 'node_modules/animate.css/animate.css'
// const ANIMATE_OUTPUT = 'public/build/'
// tailwind.css
const TAILWINDCSS_PATH = ['node_modules/tailwindcss/dist/tailwind.css']
const SOURCE_HTML = ["./src/**/*.svelte", "./public/**/*.html"]
const TAILWINDCSS_OUTPUT = 'public/build/tailwind'
// minima.css
const MINIMACSS_PATH = [
    "./src/sass/**/minima.scss",
    // "./src/sass/**/main.scss"
]
const MINIMACSS_DIR_PATH = ["./src/sass/**/*.scss"]
const MINIMACSS_OUTPUT = './public/build/sass'

// tailwindcss
function purgecss_tailwindcss_prod() {
    var plugins = [
        // autoprefixer({browsers: ['last 1 version']}),
        tailwindcss(tailwindConfig),
        cssnano(),
    ];
    return gulp.src(TAILWINDCSS_PATH)
        .pipe(purgecss({
            content: SOURCE_HTML
        }))
        .pipe(postcss(plugins))
        .pipe(gulp.dest(TAILWINDCSS_OUTPUT))
}

function purgecss_tailwindcss_dev() {
    return gulp.src(TAILWINDCSS_PATH)
        .pipe(purgecss({
            content: SOURCE_HTML
        }))
        .pipe(postcss())
        .pipe(gulp.dest(TAILWINDCSS_OUTPUT))
}

// tailwindcss
function tailwindcss_dev() {
    var plugins = [
        // autoprefixer({browsers: ['last 1 version']}),
        tailwindcss(tailwindConfig),
        // cssnano(),
    ];
    return gulp.src(TAILWINDCSS_PATH)
        .pipe(postcss(plugins))
        .pipe(gulp.dest(TAILWINDCSS_OUTPUT))
}
function complier_sass_prod() {
    var plugins = [
        cssnano()
    ];
    return gulp.src(MINIMACSS_PATH)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(gulp.dest(MINIMACSS_OUTPUT))
}
function complier_sass_dev() {
    return gulp.src(MINIMACSS_PATH)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(MINIMACSS_OUTPUT))
}
function complier_tailwind_watch() {
    gulp.watch(SOURCE_HTML, tailwindcss_dev)
}
function complier_sass_watch() {
    gulp.watch(MINIMACSS_DIR_PATH, complier_sass_dev)
}
exports.css = gulp.series(purgecss_tailwindcss_prod, complier_sass_prod);
exports["css:dev"] = gulp.series(purgecss_tailwindcss_dev, complier_sass_dev);
exports["sass"] = gulp.series(complier_sass_dev)
exports["sass:watch"] = gulp.series(complier_sass_watch)
exports.default = gulp.series(purgecss_tailwindcss_prod, complier_sass_prod);
exports["watch"] = gulp.parallel(complier_sass_watch)

// postcss
