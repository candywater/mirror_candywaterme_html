const gulp = require('gulp')
const purgecss = require('gulp-purgecss')
// const sourcemaps = require('gulp-sourcemaps')
// var autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sass = require('gulp-sass')(require('sass'));


// const ANIMATE_PATH = 'node_modules/animate.css/animate.css'
const TAILWINDCSS_PATH = 'node_modules/tailwindcss/dist/tailwind.css'
const SOURCE_HTML = ["./src/**/*.svelte", "./public/**/*.html"]
const TAILWINDCSS_OUTPUT = 'public/build/tailwind'
// const ANIMATE_OUTPUT = 'public/build/'

// tailwindcss
function purgecss_tailwindcss_prod() {
    var plugins = [
        // autoprefixer({browsers: ['last 1 version']}),
        cssnano()
    ];
    return gulp.src(TAILWINDCSS_PATH)
        .pipe(purgecss({
            content: SOURCE_HTML
        }))
        .pipe(postcss(plugins))
        .pipe(gulp.dest(TAILWINDCSS_OUTPUT))
}
// tailwindcss
function purgecss_tailwindcss_dev() {
    return gulp.src(TAILWINDCSS_PATH)
        .pipe(gulp.dest(TAILWINDCSS_OUTPUT))
}
function complier_sass() {
    var plugins = [
        cssnano()
    ];
    return gulp.src(["./src/sass/**/*.scss"])
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./public/build/sass'))
}
function complier_sass_dev() {
    return gulp.src(["./src/sass/**/*.scss"])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/build/sass'))
}
exports.css = gulp.series(purgecss_tailwindcss_prod, complier_sass);
exports["css:dev"] = gulp.series(purgecss_tailwindcss_dev, complier_sass_dev);
exports["scss:dev"] = gulp.series(complier_sass_dev)
exports.default = gulp.series(purgecss_tailwindcss_prod, complier_sass);

// postcss
