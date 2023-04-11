const countObjects = require('../count-objects');

describe('countObjects tests', () => {
    test('Returns 1 when passed a single empty object', () => {
      expect(countObjects({})).toBe(1);
    });
    test('Returns the count of all nested objects', () => {
        expect(countObjects({a: {b: {c: 1}}})).toBe(3);
        expect(countObjects({a: {b: {c: {d: 1}}}})).toBe(4);
      });
  });