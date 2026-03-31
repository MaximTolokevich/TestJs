const { add, subtract, multiply, divide } = require('../src/calculator');

describe('Calculator Functional Tests', () => {

    test('add works: должен складывать 1 + 2 и получать 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('subtract works: должен вычитать 5 - 2 и получать 3', () => {
        expect(subtract(5, 2)).toBe(3);
    });

    test('multiply works: должен умножать 3 * 3 и получать 9', () => {
        expect(multiply(3, 3)).toBe(9);
    });

    test('divide works: должен делить 10 / 2 и получать 5', () => {
        expect(divide(10, 2)).toBe(5);
    });

    test('divide by zero: должен выкидывать ошибку при делении на 0', () => {
        expect(() => divide(1, 0)).toThrow("Division by zero");
    });
});

