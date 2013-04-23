require([
  'dojo/on',
  'rawr/client',
  'app/square',
  'dojo/domReady!'
], function(on, Rawr, square){

  'use strict';

  var rawr = new Rawr(eio('ws://localhost:3000/'));

  //to play with rawr in dev tools:
  window.rawr = rawr;
  window.square = square;

  var showResult = function(result, timeStart){
    document.getElementById('result').innerHTML = result;
    document.getElementById('elapsedTime').innerHTML = Date.now() - timeStart;
  };

  rawr.then(function(methods){
    on(document, '#wbutton:click', function(){
      var timeStart = Date.now();
      methods.square(document.getElementById('num1').value).then(function(result){
        showResult(result,timeStart);
      }, function(err){
        showResult(err,timeStart);
      });
    });
  });

  console.log(rawr);

  console.log('square: ', square(2));

});