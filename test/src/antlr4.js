'use strict';

var grunt = require('grunt');

exports.antlr4 = {
    setUp: function (done) {
        done();
    },
    default: function (test) {
        test.expect(1);

        test.ok(grunt.file.exists('test/expected'), 'should create dist directory');

        test.done();
    }
};
