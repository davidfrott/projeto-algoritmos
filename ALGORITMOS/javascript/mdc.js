//Questão 4
//Maximo divisor comum
function mdc(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return Math.abs(a); // valor absoluto, caso seja negativo
}

module.exports = mdc;

console.log( "MDC de 48 e 18 é:", mdc(48, 18) );