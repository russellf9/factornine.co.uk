'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    pandoc = require('gulp-pandoc'),
    shell = require('gulp-shell');

// using a shell script as the `gulp-pandoc` wasn't working

// Creates a HTML from a set of md files
gulp.task('cv', shell.task([
    'sh cv/cv.sh'
]));
