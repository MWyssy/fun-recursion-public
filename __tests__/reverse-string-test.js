const reverseString = require('../reverse-string');

describe('reverseString tests', () => {
    test('returns the string if there is only one character', () => {
      //Arrange
      const input = 'a';
      const expectedOutput = 'a';
      //Act
      const output = reverseString(input);
      //Assert
      expect(output).toBe(expectedOutput);
    });
    test('swaps the characters of a two letter string', () => {
        //Arrange
        const input = 'ab';
        const expectedOutput = 'ba';
        //Act
        const output = reverseString(input);
        //Assert
        expect(output).toBe(expectedOutput);
      });
      test('reverses the characters of a multy letter string', () => {
        //Arrange
        const input = 'abcdefg';
        const expectedOutput = 'gfedcba';
        //Act
        const output = reverseString(input);
        //Assert
        expect(output).toBe(expectedOutput);
      });
  });