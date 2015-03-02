'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    template = require('gulp-template');


// Overwrites the the templated string with the package number in the index file.
gulp.task('update', function() {

    var pkg = require('../../../package.json');

    gulp.src(config.paths.index)
        .pipe(template({pkg: pkg}))
        .pipe(gulp.dest(config.paths.src));
});

