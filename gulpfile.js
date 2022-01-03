const gulp = require('gulp')
const purgecss = require('gulp-purgecss')
// const sourcemaps = require('gulp-sourcemaps')
// var autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');


// const ANIMATE_PATH = 'node_modules/animate.css/animate.css'
const TAILWINDCSS_PATH = 'node_modules/tailwindcss/dist/tailwind.css'
const SOURCE_HTML = ["./src/**/*.svelte", "./public/**/*.html"]
const TAILWINDCSS_OUTPUT = 'public/build/tailwind'
// const ANIMATE_OUTPUT = 'public/build/'

// tailwindcss
function purgecss_tailwindcss_prod ()  {
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
function purgecss_tailwindcss_dev ()  {
    var plugins = [
        // autoprefixer({browsers: ['last 1 version']}),
        cssnano()
    ];
    return gulp.src(TAILWINDCSS_PATH)
        .pipe(gulp.dest(TAILWINDCSS_OUTPUT))
}
exports.css = gulp.series(purgecss_tailwindcss_prod);
exports["css:dev"] = gulp.series(purgecss_tailwindcss_dev);

// postcss
