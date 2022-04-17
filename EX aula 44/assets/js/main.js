// Capturar evento de submit do formulário
const form = document.querySelector('#formulario'); // como é um id utiliza ('#formulario')

form.addEventListener('submit', function (e) { //para parar o envio do formulario utilizamos a função (form.addEventListener)
  e.preventDefault();
  console.log('Evento previnido.');
  
});
 