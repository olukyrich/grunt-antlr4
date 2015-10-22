# grunt-antlr4

> Grunt task for antlr4.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-antlr4 --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-antlr4');
```

## The "antlr4" task

### Overview
In your project's Gruntfile, add a section named `antlr4` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  antlr4: {
    your_target: {
      grammar: 'Path to your .g4 file',
      options: {
          // Target-specific options go here.
      },
    },
  },
});
```

### Options

A hash of antlr command line options.

Please refer to https://theantlrguy.atlassian.net/wiki/display/ANTLR4/ANTLR+Tool+Command+Line+Options.

Top level options are those which are not flags and grammar-level options. 
Format: -{optionName} {optionValue}

Flags are options which don't have a value. 
Format: -{flagName}

Grammar-level options are JVM arguments formatted as:
-D{optionName}={optionValue}

#### options.flags
Type: `Array`

An array of flag names

#### options.grammar
Type: `Object`

A hash of grammar-level options

### Usage Examples
```js
grunt.initConfig({
    antlr4: {
        test: {
            grammar: 'JSON.g4', //path to your grammar definition
            options: {
                o: 'dist', //output directory
                grammarLevel: {
                    language: 'JavaScript' //generated code language
                },
                flags: [
                    'visitor' //enable visitor generation
                ]
            }
        }
    }
});
```
