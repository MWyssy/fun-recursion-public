const sumThroughN = require('../sum-through-n');

describe('sumThroughN tests', () => {
    test('Returns 1 when given the number 1', () => {
      //Arrange
      const input = 1;
      const expectedOutput = 1;
      //Act
      const output = sumThroughN(input);
      //Assert
      expect(output).toBe(expectedOutput);
    });
    test('Returns the sum of all whole numbers between 1 and n', () => {
        //Arrange
        const input = 10;
        const expectedOutput = 55;
        //Act
        const output = sumThroughN(input);
        //Assert
        expect(output).toBe(expectedOutput);
      });
  });