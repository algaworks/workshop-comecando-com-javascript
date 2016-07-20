var tick = (function(){
  var contador = 0;

  return function() { 
    contador = contador + 1;
    console.log(contador);
  }
})();

tick();
tick();
tick();