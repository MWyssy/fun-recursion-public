const analyzeArray = require('../analyze-array');

describe('analyzeArray tests', () => {
    test('Returns a console log which includes an empty string if passed an empty array', () => {
      //Arrange
      const consoleSpy = jest.spyOn(console, 'log');
      const expectedOutput = '';
      //Act
      analyzeArray('', []);
      //Assert
      expect(consoleSpy).toHaveBeenCalledWith(expectedOutput);
    });
    test('Returns a console log which includes the string, an index number and the string for each index of the array, if passed a single layered array', () => {
        //Arrange
        const inputString = 'Mike';
        const inputArray = [
            'is cool',
            'is learning to code',
            'can be funny sometimes'
        ]
        const consoleSpy = jest.spyOn(console, 'log');
        //Act
        analyzeArray(inputString, inputArray);
        //Assert
        expect(consoleSpy).toHaveBeenCalledTimes(4)
        expect(consoleSpy).toHaveBeenCalledWith('Mike.0: is cool')
        expect(consoleSpy).toHaveBeenCalledWith('Mike.1: is learning to code')
        expect(consoleSpy).toHaveBeenCalledWith('Mike.2: can be funny sometimes');
      });
      test('Returns a console log which includes the string, an index number with the sub array index number and the string for each index of the array and sub-arrays, if passed a multi-layered array', () => {
        //Arrange
        const inputString = 'Mike';
        const inputArray = [
            'is cool',
            'is learning to code',
            'can be funny sometimes',
            [
                'and is also a nice guy',
                [
                    'but can sometimes be a bit annoying',
                    'and a bit self-centered'
                ]
            ]
        ]
        const consoleSpy = jest.spyOn(console, 'log');
        //Act
        analyzeArray(inputString, inputArray);
        //Assert
        //expect(consoleSpy).toHaveBeenCalledTimes(8)
        expect(consoleSpy).toHaveBeenCalledWith('Mike.0: is cool')
        expect(consoleSpy).toHaveBeenCalledWith('Mike.1: is learning to code')
        expect(consoleSpy).toHaveBeenCalledWith('Mike.2: can be funny sometimes');
        expect(consoleSpy).toHaveBeenCalledWith('Mike.3.0: and is also a nice guy');
        expect(consoleSpy).toHaveBeenCalledWith('Mike.3.1.0: but can sometimes be a bit annoying');
        expect(consoleSpy).toHaveBeenCalledWith('Mike.3.1.1: and a bit self-centered');
      });
  });