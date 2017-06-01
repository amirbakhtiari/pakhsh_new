/**
 * Created by amirbakhtiari on 6/1/17.
 */
var gulp = require('gulp');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');

const ASSETS_FILE = {
    admin: 'resources/assets/js/admin/',
    users: 'resources/assets/js/users/',
    template: 'template/**/'

};

gulp.task('js', function() {
    gulp.src(ASSETS_FILE.admin + '*.js')
        .pipe(minify())
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('public/js/'));
});
gulp.task('watch', function() {
    gulp.watch(ASSETS_FILE.admin);
    gulp.watch(ASSETS_FILE.template);
});
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "tesaproject.dev"
        }
    });

});
gulp.task('default', ['js', 'watch', 'browser-sync'], function() {

});