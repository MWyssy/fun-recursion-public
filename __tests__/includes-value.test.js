const includesValue = require('../includes-value');

describe('includesValue tests', () => {
    test('Returns false if passed an empty array', () => {
        expect(includesValue([])).toBe(false);
    });
    test('Returns true if passed an array that does contain the value', () => {
        expect(includesValue([1, 2, 3, 4], 4)).toBe(true);
    });
    test('Returns false if passed an array that doesn\'t contain the value', () => {
        expect(includesValue([1, 2, 3, 4], 5)).toBe(false);
    });
    test('Returns true if passed a multi-layered array that does contain the value', () => {
        expect(includesValue(["toast", ["avocado", ["chilli flakes"]]], "avocado")).toBe(true);
    });
    test('Returns false if passed a multi-layered array that does not contain the value', () => {
        expect(includesValue(["toast", ["butter", ["chilli flakes"]]], "avocado")).toBe(false);
    });
  });