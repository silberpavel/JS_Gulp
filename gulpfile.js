// Gulp it's project build system
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglifyJs = require('gulp-uglifyjs'),
    autoprefixer = require('gulp-autoprefixer'),
    BS = require('browser-sync');

// 1. task()
// 2. src()
// 3. dest()
// 4. watch()

// var config = {
//     project: './project',
//     final: './final'
// }

gulp.task('sass', function() {
    gulp.src('./project/sass/**/*.sass')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./final/css/'))
        .pipe(BS.reload({ stream: true }));
});

gulp.task('html', function() {
    gulp.src('./project/html/**/*.html')
        .pipe(gulp.dest('./final/html/'))
        .pipe(BS.reload({ stream: true }));
});

gulp.task('js', function() {
    gulp.src('./project/js/**/*.js')
        .pipe(uglifyJs())
        .pipe(gulp.dest('./final/js/'))
        .pipe(BS.reload({ stream: true }));
});

gulp.task('watch', function() {
    gulp.watch('./project/sass/**/*.sass')
    gulp.watch('./project/html/**/*.html')
    gulp.watch('./project/js/**/*.js')
});

// SERVER
gulp.task('server', function() {
    BS({
        server: {
            baseDir: './final/html/index.html'
        }
    });
});

gulp.task('default', ['sass', 'html', 'js', 'watch', 'server'], function() {
    console.log('ALL GOOD');
});