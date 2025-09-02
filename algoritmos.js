// 1. Número Primo
function ehPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// 2. Somatório
function somatorio(numeros) {
    return numeros.reduce((acc, val) => acc + val, 0);
}

// 3. Fibonacci
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const seq = [0, 1];
    for (let i = 2; i < n; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq;
}

// 4. Máximo Divisor Comum (MDC)
function mdc(a, b) {
    return b === 0 ? a : mdc(b, a % b);
}

// 5. Ordenação (Quicksort)
function quicksort(arr) {
    if (arr.length <= 1) return arr;
    const pivo = arr[arr.length - 1];
    const menores = arr.slice(0, arr.length - 1).filter(el => el < pivo);
    const maiores = arr.slice(0, arr.length - 1).filter(el => el >= pivo);
    return [...quicksort(menores), pivo, ...quicksort(maiores)];
}

// 6. Contagem em Intervalo
function contarNoIntervalo(dados, inicio, fim) {
    return dados.filter(n => n >= inicio && n <= fim).length;
}


console.log("--- Testando Funções ---");

console.log("1. É primo?");
console.log("7 é primo?", ehPrimo(7));   
console.log("10 é primo?", ehPrimo(10));

console.log("\n2. Somatório:");
const arraySoma = [5, 10, 15, 20];
console.log(`Soma de [${arraySoma}] é`, somatorio(arraySoma)); 

console.log("\n3. Fibonacci:");
console.log("Os 10 primeiros termos de Fibonacci:", fibonacci(10));

console.log("\n4. MDC:");
console.log("MDC de 48 e 18 é", mdc(48, 18)); 

console.log("\n5. Quicksort:");
const arrayDesordenado = [10, 7, 8, 9, 1, 5];
console.log(`Array [${arrayDesordenado}] ordenado:`, quicksort(arrayDesordenado));

console.log("\n6. Contagem no Intervalo:");
const dados = [1, 5, 10, 15, 20, 25, 30];
console.log(`Números entre 10 e 25 no conjunto [${dados}]:`, contarNoIntervalo(dados, 10, 25)); 