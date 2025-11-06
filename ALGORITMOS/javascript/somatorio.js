//Questão 2
let numeros = [10, 20, 30, 40, 50];

function somatorio(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

module.exports = somatorio;

let meusNumeros = [10, 20, 30, 40, 50];
console.log( "Resultado do somatório:", somatorio(meusNumeros) );