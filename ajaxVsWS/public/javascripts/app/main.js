define([
  'dojo/dom',
  'dojo/on',
  'dojox/rpc/Service',
  'dojox/rpc/JsonRPC',
  'app/WsRpc'
], function(dom,on,Service,JsonRPC,WsRpc){

  var socketObj = {socket: io.connect('/') };
  var wsrpc = new WsRpc(socketObj);
  window.wsrpc = wsrpc; //export global to play with in web dev tools

  var ajaxRpc = new Service('/smd');

  on(document,'#wbutton:click',function(){
    var timeStart = Date.now();
    wsrpc.square(dom.byId('num1').value).then(function(result){ showResult(result,timeStart); });
  });


  on(document,'#abutton:click',function(){
    var timeStart = Date.now();
    ajaxRpc.square(dom.byId('num1').value).then(function(result){ showResult(result,timeStart); });
  });

  var showResult = function(result, timeStart){
    dom.byId('result').innerHTML = result;
    dom.byId('elapsedTime').innerHTML = Date.now() - timeStart;
  };

});