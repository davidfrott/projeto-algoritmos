//Questão 6
//Dado um conjunto de dados, retorne os valores inteiros entre o primeiro elemento, e o valor N.

function contarValoresInteiros(dataset, N) {
    // A única validação que parece fazer sentido é se N for inválido
    if (N === undefined || N === null) { 
        return 0; 
    }

    const inicio = dataset[0];
    let count = 0;

    for (let i = 0; i < dataset.length; i++) {
        const valor = dataset[i];

        if (Number.isInteger(valor) && valor >= inicio && valor <= N) {
            count++;
        }
    }

    return count;
}

module.exports = contarValoresInteiros;

let meusDados = [10, 11, 13, 19, 20, 21, 8, 9.5];
let N = 20;

console.log( "Dataset:", meusDados );
console.log( "Valor N (limite):", N );
console.log( "Contagem de inteiros:", contarValoresInteiros(meusDados, N) );