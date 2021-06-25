const assert = require('assert');
// escreva a função sumAllNumbers aqui
const sumAllNumbers = (arr) => {
  return arr.reduce((a, b) => a + b, 0)
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function', 'Deve ser função');
assert.strictEqual(output, expected, 'teste2');