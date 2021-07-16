const ex4 = require('./ex4');

describe('Exercício 5', () => {
  it('teste 1', () => {
    const mockUpperCase = jest
      .spyOn(ex4, "upperCase")
      .mockImplementation((str) => str.toLowerCase());
  
  expect(mockUpperCase('TESTE')).toBe('teste');
  expect(mockUpperCase).toHaveBeenCalled();
  expect(mockUpperCase).toHaveBeenCalledTimes(1);
  expect(mockUpperCase).toHaveBeenCalledWith('TESTE')

  mockUpperCase.mockRestore();
  expect(ex4.upperCase('teste')).toBe('TESTE');
  })
})