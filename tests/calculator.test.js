const { add, subtract, multiply, divide } = require('../src/calculator');

describe('Calculator', () => {
    test('adds 1 + 2 to equal 3', () => expect(add(1, 2)).toBe(3));
    test('subtracts 5 - 2 to equal 3', () => expect(subtract(5, 2)).toBe(3));
    test('multiplies 3 * 3 to equal 9', () => expect(multiply(3, 3)).toBe(9));
    test('divides 10 / 2 to equal 5', () => expect(divide(10, 2)).toBe(5));
    test('throws on divide by zero', () => expect(() => divide(1, 0)).toThrow());
});
