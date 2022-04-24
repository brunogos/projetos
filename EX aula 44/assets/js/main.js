// Capturar evento de submit do formulário
const form = document.querySelector('#formulario'); // como é um id utiliza ('#formulario')

form.addEventListener('submit', function (e) { //para parar o envio do formulario utilizamos a função (form.addEventListener)
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  console.log(peso, altura);
});

function criaP () {
  const p = document.createElement('p'); // Criar uma variavel - criando um paragrafo ('p')
  return p;
}

function setResultado (msg) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();
}
 