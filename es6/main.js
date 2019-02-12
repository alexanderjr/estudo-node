/****************** PARTE 1 ******************/
class Automovel {
    constructor(){
        this.quilometragem = 0;
    }

    acelerar(){
        console.log("Acelerando");
    }

    frear(){
        console.log("Freando");
    }

    re(){
        console.log("Ré");
    }
}

class Moto extends Automovel {
    constructor(){
        super();
    }

    re(){
        console.log("Não pode andar de ré")
    }
}

class Carro extends Automovel {}


console.log("Moto")
const moto = new Moto();
moto.acelerar();
moto.frear();
moto.re();

console.log("\nCarro")
const carro = new Carro();
carro.acelerar();
carro.frear();
carro.re();


class Matematica {
    static somar(a,b){
        console.log(a + b);
    }
}

/****************** PARTE 2 ******************/
console.log("\n")
Matematica.somar(1,1)

console.log("\nMutação de valor na const")
const usuario = {nome: 'Alexander'};
usuario.nome = "Alex";
console.log(usuario.nome);

/****************** PARTE 3, 4 e 5 ******************/
const arr = [1, 3, 4, 5, 6, 7];

const newArr = arr.map(function(item, index){
    return item * 2;
});

console.log(arr);
console.log(newArr);

const somaTotal = arr.reduce((total, next) => total + next);

console.log(somaTotal);

const pares = arr.filter(item => item % 2 === 0);

console.log(pares);

const buscar = arr.find(function(item){
    return item === 4;
});

console.log(buscar);

function soma(a = 0, b = 0){
    return a + b
}

console.log(soma(1));

/****************** PARTE 6 ******************/

const pessoa = {

    nome: "Alexander",
    idade: 10,
    endereco: {
        cidade: "São Vicente",
        estado: "SP"
    }
}

const {nome, idade, endereco: { cidade }} = pessoa;
console.log(cidade);

function exibirNome({nome}){
    console.log(nome);
}
exibirNome(pessoa);

/****************** PARTE 7 ******************/

//REST
const animal = {

    tipo: "Mamifero",
    apelido: "Cão",
    qt_patas: 4
}

const {apelido, ...resto} = animal;
console.log(apelido);
console.log(resto);

function quadrado(...params){
    let quadrado = params.map(item => item * 2);
    console.log(quadrado);
}

console.log(quadrado(10,5,2));

//SPREAD
const arr1 = [1,3,5];
const arr2 = [2,4,6]
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const usuario2 =  {...pessoa, nome: "Alexander Junior"};
console.log(usuario2);

/****************** PARTE 8 e 9 ******************/
console.log(`Meu nome é ${pessoa.nome}`);

const pessoa2 = {
    nome,
    sobrenome: "Junior"
}

console.log(pessoa2);