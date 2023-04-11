const fibonacci = require('../fibonacci');

describe('fibonacci tests', () => {
    test('returns 0 if the argument is 1', () => {
      //Arrange
      const input = 1;
      const expectedOutput = 0;
      //Act
      const output = fibonacci(input);
      //Assert
      expect(output).toBe(expectedOutput);
    });
    test('returns the number of the fibonacci sequence based on the argument', () => {
        expect(fibonacci(2)).toBe(1);
        expect(fibonacci(7)).toBe(8);
        expect(fibonacci(10)).toBe(34);
      });
  });