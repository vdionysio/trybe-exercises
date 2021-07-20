

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, name) => {
    // console.log((name.toUpperCase().split('').filter((char) => char === 'A')).length)
    // console.log((name.toUpperCase().split('').filter((char) => char === 'A')))
    return acc + (name.toUpperCase().split('').filter((char) => char === 'A')).length
  },0)
}

assert.deepStrictEqual(containsA(), 20);