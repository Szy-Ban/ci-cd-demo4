const { sum, isEven } = require('../src/functions');

test('sum adds two numbers', () => {
    expect(sum(2, 3)).toBe(5);
});

test('isEven returns true for even numbers', () => {
    expect(isEven(4)).toBe(true);
});

test('isEven returns false for odd numbers', () => {
    expect(isEven(3)).toBe(false);
});