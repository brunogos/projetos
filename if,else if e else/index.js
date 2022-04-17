// entre 0 a 11 - 'Bom dia'
// entre 12 17 - 'Boa tarde'
// entre 18 a 23 - 'Boa note'

//*********
//if pode ser usado sozinho
// sempre que utilizo else, preciso de if antes
// Eu posso ter varios else ifs nas condições (checagem)
// So é possivel ter um else na checagem
// Podemos usar condições sem else if, utilizando apenas (if) e (else)



// EX 1 condições de hora 'bom dia'
/*const hora = 12;

if (hora <= 12) {
    console.log('Bom dia');
    console.log(1 + 1);
}*/
// Se a condição envolvida for falsa não aparece o resultado qdo executar

// EX 2 condições de hora 'boa tarde'
/*const hora = 13;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
}    else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
 }*/

// EX 3 condições de hora 'boa noite
/*const hora = 18;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
}    else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
}   else if (hora >= 18 && hora <= 23 ) {
    console.log('Boa noite');
}  */

// EX 4 casos raros onde a hora é 50 como sistema vai identificar o que falar bom dia, tarde ou noite
/*const hora = 50;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
}    else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
}   else if (hora >= 18 && hora <= 23 ) {
    console.log('Boa noite');
}   else {
    console.log('Ola');
}*/

// EX 5 criando condições else (verdadeiro ou falso true e false NaN)

// const tenhograna = true;

// if (tenhograna) {
//     console.log('Vou sair de casa');
// }   else {
//     console.log('Não vou sair de casa');
// }
// Se a condição for true verdeiro - A resposta é (vou sair de casa)
// Caso for false ou NaN será a resposta (não vou sair de casa)