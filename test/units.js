var test = require('unit.js'),
    crud = require('node-crud'),
    express = require('express'),
    cm = require('../'),
    mongoose = require('mongoose');

// Connect to db ---------------------------------------------------------------
mongoose.connect('mongodb://127.0.0.1/test');
mongoose.connection.on('error', function(e) {
  console.error('Mongoose default connection error: ' + e);
});
mongoose.connection.once('connected', function() {
  console.log('connected to db.');
});
