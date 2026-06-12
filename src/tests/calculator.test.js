const core = require('../calculator-core');

describe('Calculator core operations', () => {
  test('addition: 2 + 3 => 5', () => {
    expect(core.add(2, 3)).toBe(5);
  });

  test('subtraction: 10 - 4 => 6', () => {
    expect(core.sub(10, 4)).toBe(6);
  });

  test('multiplication: 45 * 2 => 90', () => {
    expect(core.mul(45, 2)).toBe(90);
  });

  test('division: 20 / 5 => 4', () => {
    expect(core.div(20, 5)).toBe(4);
  });

  test('division by zero throws', () => {
    expect(() => core.div(1, 0)).toThrow('Division by zero');
  });

  // New operations: modulo, power, squareRoot
  test('modulo: 10 % 3 => 1', () => {
    expect(core.modulo(10, 3)).toBe(1);
  });

  test('modulo with negative dividend: -5 % 2 => -1 (JS remainder)', () => {
    expect(core.modulo(-5, 2)).toBe(-1);
  });

  test('power: 2 ** 8 => 256', () => {
    expect(core.power(2, 8)).toBe(256);
  });

  test('power with zero exponent: 5 ** 0 => 1', () => {
    expect(core.power(5, 0)).toBe(1);
  });

  test('squareRoot: sqrt(9) => 3', () => {
    expect(core.squareRoot(9)).toBe(3);
  });

  test('squareRoot of 2 is approx 1.4142', () => {
    expect(core.squareRoot(2)).toBeCloseTo(Math.SQRT2);
  });

  test('squareRoot of negative throws', () => {
    expect(() => core.squareRoot(-1)).toThrow('Square root of negative number');
  });

  // Additional edge cases
  test('addition with negative numbers', () => {
    expect(core.add(-2, -3)).toBe(-5);
  });

  test('subtraction resulting negative', () => {
    expect(core.sub(2, 5)).toBe(-3);
  });

  test('multiplication by zero', () => {
    expect(core.mul(1234, 0)).toBe(0);
  });

  test('division resulting in float', () => {
    expect(core.div(7, 2)).toBeCloseTo(3.5);
  });
});
