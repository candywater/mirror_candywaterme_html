const gulp = require('gulp')
const purgecss = require('gulp-purgecss')
const sourcemaps = require('gulp-sourcemaps')
var autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sass = require('gulp-sass')(require('sass'));
const tailwindcss = require('tailwindcss');
const tailwindConfig = require("./tailwind.config.js");

// animate.css
// const ANIMATE_PATH = 'node_modules/animate.css/animate.css'
// const ANIMATE_OUTPUT = 'public/build/'
// tailwind.css
const TAILWINDCSS_PATH = ['src/sass/tailwind.css']
const SOURCE_HTML = ["./src/**/*.svelte", "./src/**/*.ts", "./public/**/*.html"]
const TAILWINDCSS_OUTPUT = 'public/build/tailwind'
// minima.css
const MINIMACSS_PATH = [
    "./src/sass/**/minima.scss",
    // "./src/sass/**/main.scss"
]
const MINIMACSS_DIR_PATH = ["./src/sass/**/*.scss"]
const MINIMACSS_OUTPUT = './public/build/sass'

// tailwindcss
function tailwindcss_prod() {
    var plugins = [
        autoprefixer(),
        tailwindcss(tailwindConfig),
        cssnano(),
    ];
    return gulp.src(TAILWINDCSS_PATH)
        // .pipe(purgecss({
        //     content: SOURCE_HTML
        // }))
        .pipe(postcss(plugins))
        .pipe(gulp.dest(TAILWINDCSS_OUTPUT))
}
function tailwind_dev() {
    var plugins = [
        // autoprefixer({browsers: ['last 1 version']}),
        tailwindcss(tailwindConfig),
        // cssnano(),
    ];
    return gulp.src(TAILWINDCSS_PATH)
        .pipe(sourcemaps.init())
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(TAILWINDCSS_OUTPUT))
}
//minima
function minima_prod() {
    var plugins = [
        cssnano()
    ];
    return gulp.src(MINIMACSS_PATH)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(MINIMACSS_OUTPUT))
}
function minima_dev() {
    return gulp.src(MINIMACSS_PATH)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(MINIMACSS_OUTPUT))
}

function main_dev(){
    return gulp.src(["./src/sass/main.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(MINIMACSS_OUTPUT))
}

function complier_main_prod(){
    var plugins = [
        cssnano(),
    ];
    return gulp.src(["./src/sass/main.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(purgecss({
        content:["src/**/*.svelte"]
    }))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(MINIMACSS_OUTPUT))
}

function tailwind_watch() {
    gulp.watch(SOURCE_HTML, tailwind_dev)
}
function minima_watch() {
    gulp.watch(MINIMACSS_DIR_PATH, minima_dev)
}
function main_watch(){
    gulp.watch(MINIMACSS_DIR_PATH, main_dev);
}
// exports.css = gulp.series(purgecss_tailwindcss_prod, complier_sass_prod);
// exports["css:dev"] = gulp.series(purgecss_tailwindcss_dev, complier_sass_dev);
// exports["sass"] = gulp.series(complier_sass_dev)
// exports["sass:watch"] = gulp.series(complier_sass_watch)
exports.default = gulp.series( minima_prod, complier_main_prod, tailwindcss_prod);
exports.dev = gulp.series( minima_dev, main_dev, tailwind_dev);
exports["watch"] = gulp.parallel( minima_watch, main_watch, tailwind_watch)

// postcss
