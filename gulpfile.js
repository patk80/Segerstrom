const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Compile SCSS into CSS //
function style() {
    // 1. Locate SCSS file
    return gulp.src('./styles/scss/**/*.scss')
        // 2. Pass that file through Sass compiler
        .pipe(sass().on('error', sass.logError))
        // 3. Where to save the compiled CSS
        .pipe(gulp.dest('./styles/css'))
}

exports.style = style;
