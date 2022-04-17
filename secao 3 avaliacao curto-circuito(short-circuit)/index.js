/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false ->vai retornar "o valor verdadeiro" (valor real)

FALSY
false
0
''  ""  ``
null / undefined
NaN
*/

// EX 1
// console.log('Luiz' && NaN && 'Maria');

// ex 2
/*function falaOi () {
    return 'Oi';
}
const vaiExecutar = false;
console.log(vaiExecutar && falaOi());*/

//EX 3
/*function falaOi () {
    return 'Oi';
}
let vaiExecutar;
console.log(vaiExecutar && falaOi());*/

/* Ex 4 vaiavel com valor verdadeiro (true)
function falaOi () {
    return 'Oi';
}
const vaiExecutar = 'Joãozinho';
console.log(vaiExecutar && falaOi());
*/

// EX 5 || -> true && false ->vai retornar "o valor verdadeiro" (valor real)
//console.log(0 || false || null || 'Luiz Otávio' || true);
// ele exibiu uma expressao 'Luiz Otavio' || -> chamado também (OR) precisa tbm de uma expressão verdaeira
// então sabemos que retornou o resultado 'Luiz Otavio', pq nao é uma string vazia - p/ Javascript ele é um valor verdadeiro

/*EX 6 || chamado OR
const corUsuario = null;
const corPradao = corUsuario || 'preto';

console.log(corPradao);
 retornou preto - pq usuario não tinha cor definida */
 /* EX 7 || chamado OR - Caso usuario cadastre uma cor

 const corUsuario = 'vermelho';
 const corPradao = corUsuario || 'preto';

 console.log(corPradao); */

 /*EX 8 criar varias variaveis - 

 const a = 0;
 const b = null;
 const c = 'false';
 const d = false;
 const e = NaN;

 console.log(a || b || c || d || e);*/
 // resposta 'false' pq está entre aspas é uma string por estar na aspas em javascript é string (pegadinha com obs)

 /*EX 9
const a = 0;
 const b = null;
 const c = false;
 const d = false;
 const e = NaN;

 console.log(a || b || c || d || e);
 // resultado sempre que que as opções forem todas falsas o ultima informação é trazida nesse caso (NaN)*/

 //EX 10 nome da pessoa 

 const a = 0;
 const b = null;
 const c = false;
 const d = false;
 const e = NaN;

 console.log(a || b || 'Joãozinho' || c || d || e);
 // Joãozinho não é falso e nem negativo


