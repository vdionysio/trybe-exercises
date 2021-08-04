const { TestWatcher } = require('jest');
const ex1 = require('./ex1');

test("Testando randomNumber()", () => {
  ex1.randomNumber = jest
    .fn()
    .mockReturnValue(10);

  expect(ex1.randomNumber()).toBe(10)
  expect(ex1.randomNumber).toHaveBeenCalled();
  expect(ex1.randomNumber).toHaveBeenCalledTimes(1);
})