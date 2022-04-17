/*const array = [1,2,3];
array.push(4);
array[0] = 'Luiz';
array = 'Outra';
console.log(array);

// const não busca valor ao array quando modificado array = coisa ( por que array é uma constante)
// maneira de buscar é atraves do let ex aaixo:

let array = [1,2,3];
array.push(4);
array[0] = 'Luiz';
array = 'Outra';
console.log(array);

// Outro ex: variaveis relacionadas
const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = 25;
const nome02 = 'Maria';
const sobrenome02 = 'Oliveira';
const idade02 = 55;

// ex p ficar mais facil criar um objeto
// EXplicaçao qdo eu crio um (array) eu utilizo os [] *** Qdo preciso criar um objeto eu utilizo {}
const pessoa1 = {
nome: 'Luiz',
sobrenome: 'Miranda',
idade: 25
};
const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 55
    };
// para acessar essa informação temos que utilizar anotação de ponto
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
*/

//Posso tambem criar uma função que cria um objeto p/ mim:

/*function criaPessoa (nome , sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Luiz', 'Otavio', 25)
const pessoa2 = criaPessoa('Maria', 'Silva', 55)
const pessoa3 = criaPessoa('João', 'Alves', 45)
const pessoa4 = criaPessoa('Junior', 'Amaral', 35)
const pessoa5 = criaPessoa('Bruno', 'Puerta', 35)
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome, pessoa5.nome);
// Qdo eu atribuo um valor para esse parametro - eu chamo isso de argumento
// ARGUMENTO É O VALOR QUE É PASSADO PARA O PARAMETRO */

//Outro ex: Podemos criar um objeto criando uma variavel

/*const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
      console.log('Olá mundo!');
    }
};

pessoa1.fala();*/

// outro ex2
/*const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
      console.log(`${this.nome} ${this.sobrenome} está falando ola...`);
    }
};

pessoa1.fala();*/

// Poderia adicionar um outro metodo dentro
// EX abaixo:
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
      console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

