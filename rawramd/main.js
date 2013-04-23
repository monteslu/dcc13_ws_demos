define([
  'dojo/_base/config',
  'dojo/node!http',
  'dojo/node!ecstatic',
  'dojo/node!engine.io',
  'dojo/node!fs',
  'when',
  'nodefn',
  'rawr/server',
  'app/square'
], function(config, http, ecstatic, engine, fs, when, nodefn, Rawr, square){

  'use strict';

  // Create our HTTP server to serve static files
  var server = http.createServer(
    ecstatic({
      root: config.baseUrl + '/public',
      autoIndex: true
    })
  ).listen(3000);

  // Attach our websocket intercept
  var io = engine.attach(server);

  // Define and expose some RPC functions
  var rpc = new Rawr(io, {
    square: square,
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

});