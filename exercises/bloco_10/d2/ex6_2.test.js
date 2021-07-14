const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundAnimal = Animals.find((animal) => animal.age === age);
      if (foundAnimal) {
        return resolve(foundAnimal);
      };

      return reject('Nenhum animal com essa idade!');
    }, 100);
  })
);

const getAnimalByAge = (age) => {
  return findAnimalByAge(age)
    .then(animal => animal)
};
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimalByAge(1).then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalByAge(8).catch(error =>
        expect(error).toEqual('Nenhum animal com essa idade!')
      );
    });
  });
});