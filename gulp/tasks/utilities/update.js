'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    template = require('gulp-template');

// Overwrites the the templated string with the package number in the index file.

//  <p>Version:  <%= pkg.version %></p> will become  <p>Version:  0.0.3</p>

// Note: the build system is not normalised yet the `<%= pkg.version %>` string has to be added first!
gulp.task('update', function() {

    var pkg = require('../../../package.json');

    gulp.src(config.paths.index)
        .pipe(template({pkg: pkg}))
        .pipe(gulp.dest(config.paths.src));
});

