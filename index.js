//Exercício 01 - Manipulação Básica de Array

let numeros = [1,2,3,4,5,6,7,8,9,10]

function filtrarPares(numeros) {
    let pares = [];
    numeros.map(numero => {
        if (numero % 2 == 0) {
            pares.push(numero)
        }
    })
    return pares
}

console.log("Exercício 01 :", filtrarPares(numeros))


//Exercício 02 - Manipulação de Objetos

let pessoas = [
{ nome: 'Alice', idade: 17 },
{ nome: 'Bob', idade: 22 },
{ nome: 'Charlie', idade: 16 },
{ nome: 'David', idade: 19 }
];

function filtrarAdultos(pessoas) {

    let maiorIdade = [];
    pessoas.map(pessoa => {
        if (pessoa.idade >= 18) {
            maiorIdade.push(pessoa.nome)
        }
    })
    return maiorIdade
}

console.log("Exercício 02 :", filtrarAdultos(pessoas));

//Exercício 03 -  Agrupamento de Dados

let produtos = [
    { categoria: 'eletrônicos', preco: 99.99 },
    { categoria: 'livros', preco: 19.99 },
    { categoria: 'eletrônicos', preco: 199.99 },
    { categoria: 'livros', preco: 29.99 },
    { categoria: 'roupas', preco: 49.99 }
];
let cat1 = 0;
let cat1Nome = "";

let cat2 = 0;
let cat2Nome = "";

let cat3 = 0;
let cat3Nome = "";

let valorAgrupado = {};

let agruparPorCategoria = produtos.map(categoria => {

    if (categoria.categoria === "eletrônicos") {
        cat1 += categoria.preco
        cat1Nome = categoria.categoria
    } 
    if (categoria.categoria === "livros") {
        cat2 += categoria.preco
        cat2Nome = categoria.categoria
    } 
    if (categoria.categoria === "roupas") {
        cat3 += categoria.preco
        cat3Nome = categoria.categoria
    } 
})

valorAgrupado = {...valorAgrupado, [cat1Nome] : cat1, [cat2Nome] : cat2, [cat3Nome] : cat3}

console.log("Exercício 03 :", valorAgrupado);

//Exercício 04 -  Funções que Retornam Funções (Closures)

function contador() {
    let count = 0;

    return function() {
        count++;
        
        return count;
    };
}

console.log("Exercício 04 :")
let contador1 = contador();
console.log(contador1()); // 1
console.log(contador1()); // 2
console.log(contador1()); // 3

let contador2 = contador();
console.log(contador2()); // 1
console.log(contador2()); // 2


//Exercício 5 - Redução de Arrays

let numbers = [1, 2, 3, 4, 5];

function calcularProduto(numeros) {
    return numeros.reduce((produto, numero) => produto * numero, 1);
}
  
console.log("Exercício 5 :", calcularProduto(numbers)); // 120


//Exercício 6 - Funções de Alta Ordem

let numerosArray = [1, 2, 3, 4, 5];

function transformarArray(array, transformacao) {
    return array.map(transformacao);
}
  
function dobrar(numero) {
    return numero * 2;
}
  
console.log("Exercício 6 :", transformarArray(numerosArray, dobrar)); // [2, 4, 6, 8, 10]

//Exercício 7 - Composição de Funções

let funcaoComposta = compor(somar1, multiplicar2);

function compor(f, g) {
    return function(x) {
        return f(g(x));
    };
}

function somar1(x) {
    return x + 1;
}

function multiplicar2(x) {
    return x * 2;
}

console.log("Exercício 7 :", funcaoComposta(5)); // 11 (multiplicar2(5) = 10, somar1(10) = 11)