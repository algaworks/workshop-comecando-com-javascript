var array = "Ned Jon Robb Bran Rickon".split(' ');

console.log(array.toString());
console.log(array.join(' | '));

array.push("Sansa");
array.unshift("Sansa");

console.log(array);

var elemento = array.pop();
elemento = array.shift();

console.log(elemento);
console.log(array);

array[1] = "Jon Snow";

console.log(array);

var slice = array.slice(3,5);
console.log(slice);

var splice = array.splice(1,1,"Arya", "Sansa");
console.log(splice);
console.log(array);

array.splice(3,1);

console.log(array);

array = array.concat(splice, slice);
console.log(array);