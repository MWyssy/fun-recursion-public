const sumArraysOfNumbers = require('../sum-arrays-of-numbers');

describe('sumArraysOfNumbers tests', () => {
    test('Returns 0 when passed an empty array', () => {
      //Arrange
      const input = [];
      const expectedOutput = 0;
      //Act
      const output = sumArraysOfNumbers(input);
      //Assert
      expect(output).toBe(expectedOutput);
    });
    test('Returns the sum of the numbers in a single array', () => {
        //Arrange
        const input = [3, 5, 6, 9];
        const expectedOutput = 23;
        //Act
        const output = sumArraysOfNumbers(input);
        //Assert
        expect(output).toBe(expectedOutput);
      });
      test('Returns the sum of all the numbers in a dual-layered array', () => {
        //Arrange
        const input = [3, 5, [4, 2, 8], 6, 9, [1, 2, 3]];
        const expectedOutput = 43;
        //Act
        const output = sumArraysOfNumbers(input);
        //Assert
        expect(output).toBe(expectedOutput);
      });
      test('Returns the sum of all the numbers in a multi-layered array', () => {
        //Arrange
        const input = [3, 5, [4, [2, 6, 4], 8], 6, 9, [1, 2, 3]];
        const expectedOutput = 53;
        //Act
        const output = sumArraysOfNumbers(input);
        //Assert
        expect(output).toBe(expectedOutput);
      });
  });