const primo = require('../javascript/primo'); // AJUSTE O CAMINHO

describe('Números Primos', () => {

  // Teste 1: Encontra primos em um array
  test('deve retornar apenas os números primos de um conjunto de dados', () => {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(primo(numeros)).toEqual([2, 3, 5, 7]);
  });

  // Teste 2: Lida com números grandes
  test('deve identificar números primos maiores corretamente (29, 41)', () => {
    const numeros = [28, 29, 30, 40, 41];
    expect(primo(numeros)).toEqual([29, 41]);
  });

  // Teste 3: Caso de borda (array vazio ou sem primos)
  test('deve retornar um array vazio quando não houver primos (ou array vazio)', () => {
    expect(primo([])).toEqual([]);
    expect(primo([1, 4, 6, 8, 9, 10])).toEqual([]);
  });

});