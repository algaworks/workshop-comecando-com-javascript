(function(){
  var escopoLocal,
      esopoGlobal,
      foo,
      obj,
      array;

  escopoLocal = "foo";
  escopoLocal.split("");
  console.log(escopoLocal);

  obj = {
    foo: "bar",
    bar: "foo",
    foobar: "oi"
  };

  array = [
    1, 
    2, 
    3
  ];

})();