
  var http = require('http');
  var ecstatic = require('ecstatic');
  var engine = require('engine.io');
  var fs = require('fs');
  var when = require('when');
  var nodefn = require('when/node/function');
  var Rawr = require('rawr/server');

  'use strict';

  // Create our HTTP server to serve static files
  var server = http.createServer(
    ecstatic({
      root: __dirname + '/public',
      autoIndex: true
    })
  ).listen(3000);

  // Attach our websocket intercept
  var io = engine.attach(server);

  // Define and expose some RPC functions
  var rpc = new Rawr(io, {
    square: function(num){
      return num * num;
    },
    divide: function(dividend,divisor){
      if(divisor === 0){
        return {
          error: 'division by zero!'
        };
      }else{
        return dividend / divisor;
      }
    },
    getFileContent: function(filename){
      return nodefn.call(fs.readFile, filename, 'utf8');
    }
  });

