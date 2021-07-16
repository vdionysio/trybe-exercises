const ex4 = require('./ex4');
jest.mock("./ex4");

describe("Testando novas implementações, ", () => {
  it('da função upperCase', () => {
    ex4.upperCase.mockImplementation((str) => str.toLowerCase());
    ex4.upperCase('teste');

    expect(ex4.upperCase).toHaveBeenCalled();
    expect(ex4.upperCase('TESTE')).toBe('teste');
    expect(ex4.upperCase).toHaveBeenCalledTimes(2);
    expect(ex4.upperCase).toHaveBeenCalledWith('TESTE')
  })

  it('da função firstLetter', () => {
    ex4.firstLetter.mockImplementation((str) => str[str.length - 1]);
    ex4.firstLetter('teste');

    expect(ex4.firstLetter).toHaveBeenCalled();
    expect(ex4.firstLetter('teste')).toBe('e');
    expect(ex4.firstLetter).toHaveBeenCalledTimes(2);
    expect(ex4.firstLetter).toHaveBeenCalledWith('teste')
  })

  it('', () => {
    ex4.concatStr.mockImplementation((str1, str2, str3) => str1 + str2 + str3);
    ex4.concatStr('ola, ','como ', 'vai?');

    expect(ex4.concatStr).toHaveBeenCalled();
    expect(ex4.concatStr('ola, ','como ', 'vai?')).toBe('ola, como vai?');
    expect(ex4.concatStr).toHaveBeenCalledTimes(2);
    expect(ex4.concatStr).toHaveBeenCalledWith('ola, ','como ', 'vai?')
  })
})