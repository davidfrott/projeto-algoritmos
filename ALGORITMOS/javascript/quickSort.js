//Questão 5
//Ordenar um array usando o método Quicksort

function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
  }

module.exports = quickSort;

let arrayDesordenado = [5, 3, 8, 1, 9, 4, 2, 7, 6];
console.log( "Array desordenado:", arrayDesordenado );
console.log( "Array ordenado:", quickSort(arrayDesordenado) );
