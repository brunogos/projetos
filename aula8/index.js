/*
Bruno Gomes tem 30 anos, peso 84 kg
tem 1.75 de altura e seu IMC é de 25.9259
Bruno Gomes nasceu em 1980
*/
const nome = 'Bruno';
const sobrenome = 'Gomes';
const idade = 30;
const peso = 84;
const alturaEmCm = 1.80;
let indiceMassaCorporal; //peso / (altura * altura);
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmCm * alturaEmCm);
anoNascimento = 2019 - idade;

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmCm} de altura e seu IMC de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
