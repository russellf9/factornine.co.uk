'use strict';

var src = './app',
    app = './app',
    version = '0.0.1',
    dist  = './dist';

module.exports = {
    pkg: {
        version: '0.0.1'
    },
    paths: {
        sass: './scss/**/*.{scss, sass}',
        fonts: app + '/fonts/**',
        scripts: app + '/js/**/*.js',
        vendor: './vendor.json',
        partials: app + '/partials/**/*.html',
        index: app + '/index.html',
        images: app + '/img/**/*.*'
    },
    json: {
        package: './package.json',
        bower: './bower.json'
    },
    sass: {
    },
    scripts: {
    },
    build: {
        banner: '/*!\n' +
        ' * Copyright 2015 Factornine Ltd.\n' +
        ' * http://www.factornine.co.uk/\n' +
        ' *\n' +
        ' * Magic Squares Mobile, v+  <%= pkg.version %> \n' +
        ' * A HTML5 Angular mobile game.\n' +
        ' *\n' +
        ' * By @russellf9 \n' +
        ' *\n' +
        ' * Licensed under the MIT license. Please see LICENSE for more information.\n' +
        ' *\n' +
        ' */\n\n',
        closureStart: '(function() {\n',
        closureEnd: '\n})();',
        dist: './dist',
        html: src + '/index-copy.html'
    }
};

