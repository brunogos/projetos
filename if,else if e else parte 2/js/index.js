// Se (numero >= 0 && numero <=5) ocorrer, faça isso {código}
// Se não faça isso {o código}

// EX 1
// const numero = 10;

// if (numero >= 0) {
//     console.log('Sim, o número é maior ou igual a zero');
// }

// // EX 2
// const numero = 10;

// if (numero >= 0 && numero <= 5) {
//     console.log('O número está entre 0 e 5')
//     // Se eu quero procurar uma outra condição caso não seja suprida essa, devido meu numero não esta entre 0 e 5
// }   else {
//     console.log('O numero não está entre 0 a 5');
// }
// Dessa forma ele traz o meu resultado

//  Ex 3 Quando precisamos checar mais uma de uma condição 

// const numero = 10;

// if (numero >= 0 && numero <= 5) {
//     console.log('O número está entre 0 e 5.');
// }   else if (numero >= 6 && numero <= 8) {
//     console.log('O número está entre 6 e 8.');
// }   else if (numero >= 9 && numero <= 11) {    // bloco de código é verdadeiro (resultado de acordo com a condição lá emcima)
//     console .log('O número está entre 9 e 11.');
// }   else {
//     console.log('O número não está entre 0 e 11');
// }

//EX 4 Quando precisamos verificar um outro else if - condição verdadeira

//  const numero = 10;

//  if (numero >= 0 && numero <= 5) {
//     console.log('O número está entre 0 e 5.');
//  }   else if (numero >= 6 && numero <= 8) {
//     console.log('O número está entre 6 e 8.');
//  }  else if (1 === 1) { // COMPARAÇÃO VERDADEIRA
//     console.log ('LITERAL');
//  }   else if (numero >= 9 && numero <= 11) {    // bloco de código é verdadeiro (resultado de acordo com a condição lá emcima)
//     console .log('O número está entre 9 e 11.');
//  }   else {
//     console.log('O número não está entre 0 e 11');
//  }

//  // POSSO TAMBÉM TER MAIS CODIGO - com if
//  //  EX
//   console.log('...Aqui vai o resto do código');

  // EX 5 POSSO CRIAR UMA OUTRA CHECAGEM COM BLOCO IF

//   const numero = 10;

//   if (1 === 1) {
//   console.log('LITERAL');
// }

//  if (numero >= 0 && numero <= 5) {
//     console.log('O número está entre 0 e 5.');
//  }   else if (numero >= 6 && numero <= 8) {
//     console.log('O número está entre 6 e 8.');
//  }   else if (numero >= 9 && numero <= 11) {    // bloco de código é verdadeiro (resultado de acordo com a condição lá emcima)
//     console .log('O número está entre 9 e 11.');
//  }   else {
//     console.log('O número não está entre 0 e 11');
//  }

//  // POSSO TAMBÉM TER MAIS CODIGO - com if
//  //  EX
//  console.log('...Aqui vai o resto do código');

// EX 6 - Poderia tbm ter uma condição para saber se o meu numero é menor que 10

const numero = 10;

if (numero <= 10) {
console.log('O número é maior que 10.');
}

if (numero >= 0 && numero <= 5) {
  console.log('O número está entre 0 e 5.');
}   else if (numero >= 6 && numero <= 8) {
  console.log('O número está entre 6 e 8.');
}   else if (numero >= 9 && numero <= 11) {    // bloco de código é verdadeiro (resultado de acordo com a condição lá emcima)
  console .log('O número está entre 9 e 11.');
}   else {
  console.log('O número não está entre 0 e 11');
}

// POSSO TAMBÉM TER MAIS CODIGO - com if
//  EX
console.log('...Aqui vai o resto do código');