const { addBinary } = require('./addBinary');

describe('testing add binary strings', () => {
  test('1 + 1', () => {
    expect(addBinary('1', '1')).toBe('10');
  });
  test('1111 + 1111', () => {
    expect(addBinary('1111', '1111')).toBe('11110');
  });
  test('0 + 0', () => {
    expect(addBinary('0', '0')).toBe('0');
  });
});
