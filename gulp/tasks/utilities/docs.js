'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    template = require('gulp-template'),
    pandoc = require('gulp-pandoc'),
    shell = require('gulp-shell');

// using a shell script as the `gulp-pandoc` wasn't working

// Creates a doc from the CV HTML file
gulp.task('docs', shell.task([
        'pandoc -s -S --toc -c ./cv/poole.css ./cv/cv.html  -o ./cv/cv.docx'
    ]));


