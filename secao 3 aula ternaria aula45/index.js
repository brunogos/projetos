// ? : -> operador tenario javascript é (? :)
// const pontuacaoUSuario = 999;
//1º ex mais detalhado com varias linhas
// if (pontuacaoUSuario >= 1000) {
//     console.log('Usuário VIP');
// }   else {
//     console.log('Usuario normal');
// }
// usuaurio normal
// 2º ex mais curto op. tenaria
// Nesse caso como eu faria p/ encurtar o cod ? operação tenaria

// const pontuacaoUSuario = 1000;
// const nivelUsuario = pontuacaoUSuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
// console.log(nivelUsuario);
// resposta usurio VIP - em apenas uma linha com a operação de condição tenaria
// (condiçao) ? 'Valor para verdadeiro' : 'Valor para falso';

// 3º ex com os operadores Or And
const pontuacaoUSuario = 1000;
const nivelUsuario = pontuacaoUSuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
// setando um valor padrão para a variavel
const corUsuario = null; // pode adicionar cor ex pink - preta - vermelha
const corPadrao = corUsuario || 'Preta'

console.log(nivelUsuario, corPadrao);