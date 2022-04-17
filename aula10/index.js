// TIPOS DADOS PRIMITIVOS: STRING(TEXTO), NUMER(NUMEROS), UNDERFINDED(NÃO DECLARA UM VALOR P/ VARIAVEL), NULL(NÃO APONTA P/ LUGAR NENHUM NA MEMORIA- NÃO VAI APONTAR A NADA NA MEMORIA), BOOLEAN(VALOR LÓGICO VERDADEIRO OU FALSO), SYMBOL()
const nome = 'Bruno'; // string
const nom1 =  "Bruno"; // string
const nome2 = `Bruno`; // string
const num1 = 10; // string
const num2 = 10.52; // string
let nomeAluno; // undefined = não aponta pra local nenhuma na memória
const sobrenomeAluno = null; // Nulo -> não aponta pa local nenhuma na memória
const aprovado = false; // Boolean = tru, false (lógico)
console.log(typeof aprovado, aprovado); // como visualizar

let a = 2;
const b = a;
console.log(a, b); //2, 2

a = 3;
console.log(a, b); // 3, 2

