const { TestWatcher } = require('jest');
const ex1 = require('./ex1');

test("Testando randomNumber com outra implementação", () => {
  ex1.randomNumber = jest
    .fn()
    .mockImplementationOnce((a, b) => a / b);

  expect(ex1.randomNumber(20,10)).toBe(2);
  expect(ex1.randomNumber).toHaveBeenCalled();
  expect(ex1.randomNumber).toHaveBeenCalledTimes(1);
  expect(ex1.randomNumber(20,10)).toBe(undefined);
})