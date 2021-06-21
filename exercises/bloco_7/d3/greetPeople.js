const assert = require('assert');

const greetPeople = (people) => {
  let out = [];
  for (const person in people) {
    let greeting = 'Hello ';
    greeting += people[person];
    out.push(greeting);
  }
  return out;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof(greetPeople), 'function');
// assert.strictEqual(greetPeople(parameter[0]), result[0])
// assert.strictEqual(greetPeople(parameter[1]), result[1])
// assert.strictEqual(greetPeople(parameter[2]), result[2])

const output = greetPeople(parameter);
assert.deepStrictEqual(output, result);