const { climbingStairs } = require('./climbingStairs');

describe('testing climbing stairs function', () => {
  test('input=2', () => {
    expect(climbingStairs(2)).toBe(2);
  });
  test('input=3', () => {
    expect(climbingStairs(3)).toBe(3);
  });
  test('input=4', () => {
    expect(climbingStairs(4)).toBe(5);
  });
  test('input=5', () => {
    expect(climbingStairs(5)).toBe(8);
  });
  test('input=6', () => {
    expect(climbingStairs(6)).toBe(13);
  });
  test('input=7', () => {
    expect(climbingStairs(7)).toBe(21);
  });
  test('input=10', () => {
    expect(climbingStairs(10)).toBe(89);
  });
});
