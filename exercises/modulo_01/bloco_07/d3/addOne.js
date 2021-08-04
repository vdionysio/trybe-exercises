const assert = require('assert');
// escreva a função addOne aqui
const addOne = (arr) => {
  let out = [];
  for (let i of arr) {
    out.push(i + 1)
  }
  return out;
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function', 'é função');
assert.deepStrictEqual(output, expected, 'teste 2');
assert.deepStrictEqual(myArray, unchanged, 'teste 3');