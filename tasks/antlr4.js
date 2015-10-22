'use strict';

var childProcess = require('child_process');

module.exports = function (grunt) {

    grunt.registerMultiTask('antlr4', 'Task for antlr4 parser/lexer generation in JS', function () {
        var commandLine = ['-jar', __dirname + '/antlr-4.5.1-complete.jar'];
        var options = this.options();
        if (options.flags) options.flags.forEach(function (flag) {
            commandLine.push('-' + flag);
        });
        delete options.flags;
        if (options.grammarLevel) Object.keys(options.grammarLevel).forEach(function (optionKey) {
            commandLine.push('-D' + optionKey + '=' + options.grammarLevel[optionKey]);
        });
        delete options.grammarLevel;
        Object.keys(options).forEach(function (optionKey) {
            commandLine.push('-' + optionKey);
            commandLine.push(options[optionKey]);
        });
        commandLine.push(this.data.grammar);
        childProcess.spawnSync('java', commandLine, {stdio: 'inherit'});
    });

};