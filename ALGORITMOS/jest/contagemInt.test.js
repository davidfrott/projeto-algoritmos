const contarValoresInteiros = require('../javascript/contagemInt'); // AJUSTE O CAMINHO

describe('Contagem de Valores Inteiros no Range', () => {
  const dados = [2, 3.5, 4, 5, 6, "texto", 7, 8.2, 9, 10]; // dataset[0] é 2

  // Teste 1: Contagem em um range válido (N = 6)
  test('deve contar valores inteiros entre o primeiro elemento (2) e N=6', () => {
    // Esperado: 2, 4, 5, 6. Total: 4
    expect(contarValoresInteiros(dados, 6)).toBe(4); 
  });

  // Teste 2: Contagem em um range maior (N = 10)
  test('deve contar valores inteiros entre o primeiro elemento (2) e N=10', () => {
    // Esperado: 2, 4, 5, 6, 7, 9, 10. Total: 7
    expect(contarValoresInteiros(dados, 10)).toBe(7); 
  });
  
  // Teste 3: Caso de borda (N <= 1)
  test('deve retornar 0 quando N for menor ou igual a 1', () => {
    expect(contarValoresInteiros(dados, 1)).toBe(0);
    expect(contarValoresInteiros(dados, 0)).toBe(0);
  });

});