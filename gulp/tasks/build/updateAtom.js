'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    xeditor = require("gulp-xml-editor");

// updated the 'updateda value in the atom.xml
// had to hack to by-pass the `xmlns` attribute in the XML
// see: http://stackoverflow.com/questions/5239685/xml-namespace-breaking-my-xpath
gulp.task('updateAtom', function() {

    var date = new Date().toISOString();

    gulp.src(config.paths.atom)
        .pipe(xeditor([
            {path: "/*[name()='feed']/*[name()='updated']", text: date} // xpath
        ]))
        .pipe(gulp.dest(config.paths.app));
});
