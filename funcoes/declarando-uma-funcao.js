 console.log(dizerOla);

function dizerOi(nome) {
  console.log("Olá " + nome);
}

var dizerOla = function (nome) {
  console.log("Olá " + nome);
};

console.log(dizerOla);

var dizerTchau = new Function("nome", "console.log('Tchau ' + nome);");