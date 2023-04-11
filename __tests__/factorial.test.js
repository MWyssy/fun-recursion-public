const factorial = require('../factorial');

describe('factorial', () => {
    test('returns 1 when given the argument of 1', () => {
      //Arrange
      const input = 1;
      const expectedOutput = 1;
      //Act
      const output = factorial(input);
      //Assert
      expect(output).toBe(expectedOutput);
    });
    test('returns the factorial when given a larger number', () => {
        //Arrange
        const input = 5;
        const expectedOutput = 120;
        //Act
        const output = factorial(input);
        //Assert
        expect(output).toBe(expectedOutput);
        expect(factorial(10)).toBe(3628800)
      });
  });