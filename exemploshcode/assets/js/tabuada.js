/*
Exemplo de uma tabuada
*/

//Declaracao de uma funcao
function calculaTabuada(){
    
    //Obetendo do DOM o tbody da tabela
    let tabuada = document.querySelector("#tabuada tbody");
    //Obtendo valor o valor A do campo input number e convertendo em inteiro
    let ValorA = parseInt(document.querySelector("#ValorA").value);
    //Limpando o conteúdo do tbody
    tabuada.innerHTML = '';
    //Criando um laço de repetição de o a 10
    for (let ValorB = 0; ValorB <= 10; ValorB++) {

        //Calculando o resultado da linha atual
        let resultado = ValorA * ValorB;

        //Criando o template das colunas da linha atual
        let template = `
               <td>${ValorA}</td>
               <td>X</td>
               <td>${ValorB}</td>
               <td>=</td>
               <td>${resultado}</td>
            `;  

         //Criando o elemento tr   
        let tr = document.createElement('tr');
        //Inserindo as colunas na linha
        tr.innerHTML = template;
        //Inserindo a linha na tabela
        tabuada.append(tr);

    }//Fechando o for

}//Fechando a função

//Chamando a nossa função pela primeira vez
calculaTabuada();

//Adicionando o evento de alteração ao campo número
document.querySelector("#ValorA").addEventListener('change' , calculaTabuada);