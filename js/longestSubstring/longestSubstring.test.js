const { longestSubstring } = require('./longestSubstring');

describe('testing longest substring', () => {
  test('input=abcabcbb', () => {
    expect(longestSubstring('abcabcbb')).toBe(3);
  });
  test('input=bbbbb', () => {
    expect(longestSubstring('bbbbb')).toBe(1);
  });
  test('input=pwwkew', () => {
    expect(longestSubstring('pwwkew')).toBe(3);
  });
  test('input=""', () => {
    expect(longestSubstring('')).toBe(0);
  });
  test('input="h325 h3245"', () => {
    expect(longestSubstring('h325 h3245')).toBe(6);
  });
  test('input="$%&£%', () => {
    expect(longestSubstring('$%&£%')).toBe(4);
  });
  test('input="aab"', () => {
    expect(longestSubstring('aab')).toBe(2);
  });
  test('input="dvdf"', () => {
    expect(longestSubstring('dvdf')).toBe(3);
  });
});
