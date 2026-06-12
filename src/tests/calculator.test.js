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
