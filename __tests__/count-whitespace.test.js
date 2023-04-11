const countWhitespace = require('../count-whitespace');

describe('countWhitespace tests', () => {
    test('returns a number', () => {
      //Arrange
      const input = '';
      const expectedOutput = 0;
      //Act
      const output = countWhitespace(input);
      //Assert
      expect(output).toBe(expectedOutput);
    });
    test('can count a single whitespace in a string', () => {
        //Arrange
        const input = 'hello world!';
        const expectedOutput = 1;
        //Act
        const output = countWhitespace(input);
        //Assert
        expect(output).toBe(expectedOutput);
      });
      test('can count mutliple whitespaces in a string', () => {
        //Arrange
        const input = 'hello world! You are fabulous, and I love you!';
        const expectedOutput = 8;
        //Act
        const output = countWhitespace(input);
        //Assert
        expect(output).toBe(expectedOutput);
      });
  });