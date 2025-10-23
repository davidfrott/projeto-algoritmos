const somatorio = require('../javascript/somatorio'); // AJUSTE O CAMINHO

describe('Somatório', () => {

  // Teste 1: Soma de números positivos
  test('deve calcular corretamente a soma de um array de números positivos', () => {
    const numeros = [10, 20, 30, 40];
    expect(somatorio(numeros)).toBe(100);
  });

  // Teste 2: Soma com números negativos e zero
  test('deve calcular corretamente a soma de arrays contendo números negativos e zero', () => {
    const numeros = [-5, 0, 10, 5];
    expect(somatorio(numeros)).toBe(10);
  });

  // Teste 3: Caso de borda (array vazio)
  test('deve retornar 0 para um array vazio', () => {
    expect(somatorio([])).toBe(0);
  });

});