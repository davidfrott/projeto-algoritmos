const quickSort = require('../javascript/quickSort'); // AJUSTE O CAMINHO

describe('QuickSort', () => {

  // Teste 1: Ordenação básica de números desordenados
  test('deve ordenar corretamente um array de números aleatórios', () => {
    const arrDesordenado = [10, 5, 3, 8, 2, 9];
    const arrOrdenado = [2, 3, 5, 8, 9, 10];
    expect(quickSort(arrDesordenado)).toEqual(arrOrdenado);
  });

  // Teste 2: Array já ordenado
  test('deve retornar o mesmo array se ele já estiver ordenado', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(quickSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });
  
  // Teste 3: Array com elementos duplicados e array vazio
  test('deve lidar com elementos duplicados e retornar array vazio para input vazio', () => {
    expect(quickSort([5, 1, 5, 2, 1])).toEqual([1, 1, 2, 5, 5]);
    expect(quickSort([])).toEqual([]);
  });

});