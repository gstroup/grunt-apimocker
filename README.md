# grunt-apimocker

> Runs apimocker server to return mock service responses to your front end.

## Getting Started
This plugin requires Grunt `>=0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-apimocker --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-apimocker');
```

## The "apimocker" task

### Overview
In your project's Gruntfile, add a section named `apimocker` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  apimocker: {
    options: {
      wait : false,
      configFile: 'your-config.json'
    }
  }
});
```

### Options

#### options.configFile
Set the path to your apimocker config.json file.  Path can be absolute, or relative to the Gruntfile.

#### options.wait
Set the no exit mode. If wait is false, then the plugin depends on another plugin with no exit mode. If wait is true, then it will not exit after running.  Default is false.  Set to true if you want to keep the apimocker server running, and you don't have another long running server task in your Grunt config.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

#### 0.0.1
Initial commit.

#### 0.0.2
Added "wait" option to keep server up & running.  Thanks @moro-programmer !

#### 0.0.3
Updated to work with Grunt 1.0.

