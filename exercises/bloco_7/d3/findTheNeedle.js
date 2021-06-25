const assert = require('assert');
// escreva a função findTheNeedle aqui
const findTheNeedle = (arr, word) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === word) return i;
  }
  return -1;
};

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected, 'teste 1');

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected, 'teste 2');

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected, 'teste 3');