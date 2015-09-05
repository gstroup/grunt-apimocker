/*
 * grunt-apimocker
 * https://github.com/gbl1str/grunt-apimocker
 *
 * Copyright (c) 2014 Greg Stroup
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerTask('apimocker', 'Runs apimocker server to return mock service responses to your front end.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      wait : false,	
      configFile: 'node_modules/apimocker/test/test-config.json'
    });

    grunt.log.writeln('Starting apimocker server');
    var mocker = require('apimocker'),
        mockServer = mocker.createServer().setConfigFile(options.configFile);
        mockServer.stop().start();
    if (options.wait) {
    	this.async();
    }
  });

};
