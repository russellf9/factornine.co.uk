'use strict';

var gulp = require('gulp'),
    git = require('gulp-git'),
    gutil = require('gulp-util'),
    ftp = require('gulp-ftp'),
    gulpAtom = require('gulp-atom');


// Creates an atom file


gulp.task('atom', function() {

    return gulpAtom({
        srcPath: './app',
        releasePath: './release',
        cachePath: './cache',
        version: 'v0.20.0',
        rebuild: false,
        platforms: ['win32-ia32', 'darwin-x64']
    });
});





