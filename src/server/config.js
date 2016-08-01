/**
 * Created by sergiomarcial on 8/1/16.
 */
'use strict';

if (process.env.DOTENV !== 'initialized') {
  require('dotenv').load({silent: true});
  process.env.DOTENV = 'initialized';
}

var path = require('path');
var fs = require('fs');
var env = process.env.NODE_ENV || 'prod';

var configRE = new RegExp('^' + env.toUpperCase() + '\.js$', 'i');

var config = {isMissing: true};
var configPath;
var configDir = path.join(__dirname, 'config');

fs.readdirSync(configDir).some(function (file) {
  if (file.search(configRE) === 0) {
    configPath = path.join(configDir, file);
    return true;
  }
});

if (!configPath) {
  if (env !== 'test') {
    console.error('Missing configuration file: ' + env + ' in ' + configDir);
    process.exit();
  }
} else {
  config = require(configPath);
  console.log('Loaded configuration file ' + configPath)
}

config.env = env.toLowerCase();

module.exports = config;