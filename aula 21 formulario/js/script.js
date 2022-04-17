//function meuEscopo () {
    // 1º qdo eu precisar selecionar pela class eu utilizo (.) 2º qdo for ID (#)
   // const form = document.querySelector('.form');

   /* form.onsubmit = function (evento) {
      evento.preventDefault();
      alert(1);
      console.log('Foi enviado.');
   };
}
meuEscopo();*/

/* 2º ex mensagem de envio do formulario
function meuEscopo () {
  const form = document.querySelector('.form');
  
  form.onsubmit = function (evento) {
  evento.preventDefault();
  alert(1);
  console.log('Fo enviado');
  };


}
meuEscopo();*/

/*3 exemplo

function meuEscopo () {
  const form = document.querySelector('.form');
  
  //form.onsubmit = function (evento) {
  //evento.preventDefault();
  //alert(1);
  //console.log('Fo enviado');
  // };
  let contador = 1;
  function recebeEventoForm(evento) {
    evento.preventDefault();
    console.log(`Form não foi enviado ${contador}`);
    contador++;
  }
  form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();*/

// 4 ex - cada vez que o formulario for enviado eu preciso coletar os dados deixar salvo na caixa  de dialogo
function meuEscopo () {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado')

  const pessoas = [];

  function recebeEventoForm (evento) {
    evento.preventDefault();

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    pessoas.push({
    nome: nome.value,
    sobrenome: sobrenome.value,
    peso: peso.value,
    altura: altura.value,
    });
    console.log(pessoas);
    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` + `${peso.value} ${altura.value}</p>`;
  }

  form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();