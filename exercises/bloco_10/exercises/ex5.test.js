const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
describe('Compare dois objetos para verificar se são idênticos ou não', () => {
  it('testando comparação entre dois objetos iguais', () => {
    expect(obj1).toEqual(obj2);
  })

  it('testando comparação entre dois objetos diferentes', () => {
    expect(obj2).not.toEqual(obj3);
  })
})