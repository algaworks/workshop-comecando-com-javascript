// if (bool) { }

var x = 19;
var y;

if (x > 18) {
  y = "maior";
}
else if (x == 18) {
  y = "igual";
}
else {
  y = "menor";
}

// console.log(y);

switch(x) {
  case 18:
    y = 'dezoito';
    break;
  case 19:
    y = 'dezenove';
    break;
  default:
    y = "sei lá";
}

console.log(y);