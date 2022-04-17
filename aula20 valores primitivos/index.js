/*
Primitivos (imutaveis) - strings, number, boolean, undefined, null (bigint, symbol)
Primitivos são valores copiados
*/
/*let nome = 'Luiz';
nome = 'Otavio';
console.log(nome);
*/
// outro ex de a string são indexadas em js 0123
//ex abaixo: array e string é possivel buscar a informação
/*let nome = 'Luiz';
console.log(nome[0]);*/
// Outro ex: no array apenas mais não aparece o (R), pois é imutável
/*let nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0]);*/

/*
let a = 'A';
let b = a; // copia do valor A para variavel B
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);
*/

// Ex de um valor que nao é primitivo
// Outra coisa tipo de dados que são chamados de (referencia) = (mutável)  São eles:
// Arrays - objects - function
//(Referencia mutável) são valores passado por referencia (Qdo utilizamos o sinal de atribuição (=) significa que foi criado uma referencia para o mesmo valor na memoria

/*
let a = [1, 2, 3];
let b = a;
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(c);
*/

// Se vc quiser copiar valor de A para B
/*let a = [1, 2, 3];
let b = [...a];
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(a, c);*/

// EX com objetos
const a = {
    nome :'Luiz',
    sobrenome: 'Otávio'
};
const b = a;

b.nome = 'João';
console.log(a);
console.log(b);
// 