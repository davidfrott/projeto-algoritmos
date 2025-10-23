const fibonacci = require('../javascript/fibonacci'); // AJUSTE O CAMINHO

describe('Fibonacci', () => {

  // Teste 1: Caso comum (os 8 primeiros termos)
  test('deve retornar os 8 primeiros termos da sequência de Fibonacci', () => {
    // 0, 1, 1, 2, 3, 5, 8, 13
    expect(fibonacci(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  // Teste 2: Caso de borda (n = 1)
  test('deve retornar [0] quando o número de termos for 1', () => {
    expect(fibonacci(1)).toEqual([0]);
  });

  // Teste 3: Caso de borda (n <= 0)
  test('deve retornar um array vazio quando o número de termos for 0 ou negativo', () => {
    expect(fibonacci(0)).toEqual([]);
    expect(fibonacci(-5)).toEqual([]);
  });

});