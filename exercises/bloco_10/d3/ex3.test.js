const { TestWatcher } = require('jest');
const ex1 = require('./ex1');

describe("Testes agrupados", () => {
  test("Testando randomNumber com outra implementação", () => {
    ex1.randomNumber = jest
      .fn()
      .mockImplementationOnce((a, b, c) => a * b * c);
  
    expect(ex1.randomNumber(2,2,2)).toBe(8);
    expect(ex1.randomNumber).toHaveBeenCalled();
    expect(ex1.randomNumber).toHaveBeenCalledTimes(1);
    expect(ex1.randomNumber).toHaveBeenCalledWith(2,2,2)
  })

  test("Testando randomNumber resetado", () => {
    ex1.randomNumber
      .mockReset()
      .mockImplementationOnce((a) => a * 2)
    expect(ex1.randomNumber).toHaveBeenCalledTimes(0)

    expect(ex1.randomNumber(2)).toBe(4);
    expect(ex1.randomNumber).toHaveBeenCalledTimes(1);
    expect(ex1.randomNumber).toHaveBeenCalledWith(2)
  })
})