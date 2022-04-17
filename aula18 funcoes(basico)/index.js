/* function saudacao(nome) {
return `Bom dia! ${nome}`;
}
/*
const variavel = saudacao('Luiz');
// const variavel = saudacao('Maria');
// const variavel = saudacao('Felipe');
console.log(variavel);*/
/*function soma(x, y) {
    const resultado = x + y;
    return resultado;
    }

const resultado = soma(2, 2);
console.log(resultado);

// console.log(soma(2, 2)); // jeito errado nao consigo ver o que tem dentro da função
//console.log(resultado);  // jeito errado nao consigo ver o que tem dentro da função
// console.log(soma(2, 2));
*/

// outro exemplo:
/*function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
    }

const resultado = soma(4, 2);
console.log(resultado);
*/
// função anonima
/*const raiz = function (n) {
   return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));*/

/* funçao array function
const raiz = (n) => {
    return n ** 0.5;
};
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
*/

/* Quando temos um linha apenas podemos simplificar a função
const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));*/

// 2 jeito mais fácil
//Quando temos um linha apenas podemos simplificar a função
const raiz = function(n) {
    return n ** 0.5;
}

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

