// //Sempre que utilizar a palavra(new = função construtora)
// const data = new Date(0);   // data zero 01/01/1970 Timestamp unix ou epoca unix
// console.log(data.toString());

// EX 2 com milessimo de segundos

// const tresHoras = 60 * 60 * 3 *1000;
// const data = new Date(0 + tresHoras);   
// console.log(data.toString());

//EX 3 acrescentar um dia nessa data

//  const tresHoras = 60 * 60 * 3 *1000;
//  const umDia = 60 * 60 * 24 *1000; // Tenho um dia a mais em milessimo de segundos (01/01/1970 Timestamp unix ou epoca unix)
//  const data = new Date(0 + tresHoras + umDia);   // se eu desejar uma data a menos (modificar + por -)
//  console.log(data.toString());

// ex 4 Criar uma data

// const data = new Date();
// console.log(data.toString());

// // Criar por ano
// // Em javascript os meses começam por 0 janeiro 11 dezembro
// const data = new Date(2019, 3, 20, 15, 14); // ano, mês, dia, hora, minutos, segundos e milessimo de segundos
// console.log(data.toString());

//EX 5 data com string

// const data = new Date('2019-04-20 20:20:59');
// console.log(data.toString());

//EX 6 Com essa data podemos qualquer inf. relacionado ao dia-mes-ano-segundos-minutos

// const data = new Date('2019-04-20 20:15:59');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1);
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minutos', data.getMinutes());
// console.log('Segundos', data.getSeconds());
// console.log('Milessimo', data.getMilliseconds());
// console.log('Dia semana', data.getDay()); // 0= Domingo, 6 = Sabado
// console.log(data.toString());

// EX 7 Obeter os milessimos de segundos da data atual

// const data = new Date('2019-04-20 20:15:59.100');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1);
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minutos', data.getMinutes());
// console.log('Segundos', data.getSeconds());
// console.log('Milessimo', data.getMilliseconds());
// console.log('Dia semana', data.getDay()); // 0= Domingo, 6 = Sabado
// console.log(Date.now());

// EX 8 Obeter atraves do resultado de milessimo de segundos na data

// const data = new Date(1653241755443);
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1);
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minutos', data.getMinutes());
// console.log('Segundos', data.getSeconds());
// console.log('Milessimo', data.getMilliseconds());
// console.log('Dia semana', data.getDay()); // 0= Domingo, 6 = Sabado

//EX 7 Criar uma função que formata data

// function formataData(data) {
//     console.log(data);
// }
// const data = new Date(); 
// formataData(data);

// EX 2 Quero tirar esse console.log e retornar alguma coisa naquela função p/ jogar na variavel

function zeroAEsquerda (num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const Dia = zeroAEsquerda(data.getDate());
  const Mês = zeroAEsquerda(data.getMonth() + 1);
  const Ano = zeroAEsquerda(data.getFullYear());
  const Hora = zeroAEsquerda(data.getHours());
  const Minutos = zeroAEsquerda(data.getMinutes());
  const segundos = zeroAEsquerda(data.getSeconds());

  return `${Dia}/${Mês}/${Ano} ${Hora}:${Minutos}:${segundos}`;
}
const data = new Date(); 
const dataBrasil = formataData(data);
console.log(dataBrasil);