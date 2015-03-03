'use strict';

var gulp = require('gulp'),
    git = require('gulp-git'),
    gutil = require('gulp-util'),
    ftp = require('gulp-ftp');


// Create a new git branch
// Uses the default name as: dev-{YYMMDD}
gulp.task('upload', function() {

    var credentials = require('../../../credentials.json');

    console.log('test | credentials: ', credentials.host);


    return gulp.src('./ftp-test/*')
        .pipe(ftp({
            host: credentials.host,
            user: credentials.user,
            pass: credentials.pass
        }))
        .on('error', function(error) {
            console.log('error - ',error)
        })
        // you need to have some kind of stream after gulp-ftp to make sure it's flushed
        // this can be a gulp plugin, gulp.dest, or any kind of stream
        // here we use a passthrough stream
        .pipe(gutil.noop())
        ;
});




