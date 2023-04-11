const sumUntilOne = require('../sum-until-one');

describe('sumUntilOne tests', () => {
    test('returns the same number if the argument has only one digit', () => {
      //Arrange
      const input = 6;
      const expectedOutput = 6;
      //Act
      const output = sumUntilOne(input);
      //Assert
      expect(output).toBe(expectedOutput);
    });
    test('returns the sum of the digits of the argument, if it is a single digit number', () => {
        //Arrange
        const input = 18;
        const expectedOutput = 9;
        //Act
        const output = sumUntilOne(input);
        //Assert
        expect(output).toBe(expectedOutput);
      });
      test('returns the sum of the digits of the argument, until the result is a one digit number', () => {
        //Arrange
        const input = 1818;
        const expectedOutput = 9;
        //Act
        const output = sumUntilOne(input);
        //Assert
        expect(output).toBe(expectedOutput);
        expect(sumUntilOne(5495)).toBe(5)
      });
  });