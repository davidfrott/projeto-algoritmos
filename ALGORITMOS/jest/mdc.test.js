const mdc = require('../javascript/mdc'); // AJUSTE O CAMINHO

describe('Máximo Divisor Comum (MDC)', () => {

  // Teste 1: MDC de números típicos
  test('deve calcular corretamente o MDC de 56 e 98 (que é 14)', () => {
    expect(mdc(56, 98)).toBe(14);
  });

  // Teste 2: MDC de números primos entre si
  test('deve retornar 1 para números primos entre si (7 e 11)', () => {
    expect(mdc(7, 11)).toBe(1);
  });
  
  // Teste 3: Caso de borda (MDC com zero)
  test('deve retornar o outro número quando um dos inputs for zero (MDC de 20 e 0 é 20)', () => {
    expect(mdc(20, 0)).toBe(20);
    expect(mdc(0, 35)).toBe(35);
  });

});