const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (strings) => {
  let arrLength = [];
  for (let i of strings) {
    arrLength.push(i.length)
  }
  return arrLength;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function', 'Deve ser função');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected, 'teste 2');