const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});


test('divide 8 / 4 to equal 2', () => {
  expect(calculator.divide(8, 4)).toBe(2);
});

test('divide 8 / 8 to equal 1', () => {
  expect(calculator.divide(8, 8)).toBe(1);
});

test('subtract 5 * 10 to equal 50', () => {
  expect(calculator.multiply(5, 10)).toBe(50);
});

test('subtract 2 * 2 to equal 4', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});


// Division por cero
test('divide 8 / 0 to equal msj', () => {
  expect(calculator.divide(8, 0)).toBe("No se puede dividir por cero");
});

test('divide 0 / 8 to equal 1', () => {
  expect(calculator.divide(0, 8)).toBe("No se puede dividir por cero");
});