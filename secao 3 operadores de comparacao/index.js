/*
Operadores de comparação
> Maior que
>= Maior que ou igual a
< Menor que
<= Menor que ou igual a 
== Igualdade (valor)
=== Igualdade estrita (valor e tipo)
!= Diferente (valor)
!== Diferente estrito (valor e tipo)
*/
// EX 1
//const comp = 10 >= 11;
// console.log(comp);

// EX 2 Criar variaveis separadas
/*const num1 = 10;
const num2 = 11;
const comp = num1 < num2;
console.log(comp);*/

// EX 3
/*const num1 = 10;
const num2 = 11;
const comp = num1 == num2;
console.log(comp);*/

/* Ex 4 comparação com string ('') com operador igualdade
const num1 = 10; // a linguagem comp. number
const num2 = '10'; // a linguagem comparou com a string
const comp = num1 == num2;
console.log(comp);
// resposta true*/

// Ex 4 
// Ex 4 comparação com string ('') com operador igualdade estrita
/*const num1 = 10; // a linguagem comp. number
const num2 = '10'; // a linguagem comparou com a string
const comp = num1 === num2;
console.log(comp);
// resposta false - sao dois tipos diferentes
*/

/* Ex 5 comparação com operador !=
const num1 = 10; // a linguagem comp. number
const num2 = '10'; // a linguagem comparou com a string
const comp = num1 != num2;
console.log(comp); */

// Ex 5 comparação com operador !== *** vai comparar o tipo e valor
const num1 = 10; // a linguagem comp. number
const num2 = 10; // a linguagem comparou com a string
const comp = num1 !== num2;
console.log(comp);