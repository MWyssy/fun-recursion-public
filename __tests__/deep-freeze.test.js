const deepFreeze = require('../deep-freeze');

describe('deepFreeze tests', () => {
    test('freezes a single non-nested object', () => {
      //Arrange
      const input = {};
      const expectedOutput = {};
      //Act
      deepFreeze(input);
      input.add = 'this should not be added!'
      //Assert
      expect(input).toEqual(expectedOutput);
    });
    test('freezes multiple nested objects', () => {
        //Arrange
        const input = {a: {b: {c: 1}}};
        const expectedOutput = {a: {b: {c: 1}}};
        //Act
        deepFreeze(input);
        input.add = 'this should not be added!'
        input['a']['b'].add = 'this should not be added!'
        //Assert
        expect(input).toEqual(expectedOutput);
      });
  });