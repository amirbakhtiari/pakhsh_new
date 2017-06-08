/**
 * Created by amirbakhtiari on 6/1/17.
 */
var gulp = require('gulp');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

const ASSETS_FILE = {
    admin: 'resources/assets/js/admin/',
    mainModule: 'resources/assets/js/app.js',    
    users: 'resources/assets/js/users/',
    template: 'public/template/',
    lib: 'resources/assets/js/scripts/'
};

gulp.task('js', function() {
    gulp.src([ASSETS_FILE.mainModule, ASSETS_FILE.admin + '*.js'])
        // .pipe(minify())
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('public/js/'));
});

gulp.task('lib', function() {
    gulp.src([ASSETS_FILE.lib + 'angular.min.js', ASSETS_FILE.lib + 'angular-ui-router.js', ASSETS_FILE.lib + 'angular-resource.min.js'])
        // .pipe(minify())
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('public/js/'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "http://tesaproject.dev/"
    });
    gulp.watch(ASSETS_FILE.admin + '*.js', ['js']).on('change', browserSync.reload);
    gulp.watch(ASSETS_FILE.mainModule, ['js']).on('change', browserSync.reload);    
    gulp.watch(ASSETS_FILE.template + 'admin/*.html').on('change', browserSync.reload);
    gulp.watch('resources/views/*.php').on('change', browserSync.reload);
    gulp.watch('app/*.php').on('change', browserSync.reload);
    gulp.watch('routes/*.php').on('change', browserSync.reload);
    gulp.watch('config/*.php').on('change', browserSync.reload);
});
gulp.task('default', ['js', 'lib', 'browser-sync']);