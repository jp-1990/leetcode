// Given a string s find the longest substring without repeating characters

exports.longestSubstring = (s) => {
  // O(1)
  let maxSubStr = '';
  let localMax = '';
  //O(n) : worst case O(3n) which is still O(n)
  for (let i = 0, j = s.length; i < j; i++) {
    const letter = s[i];
    if (localMax.includes(letter)) {
      localMax = localMax.slice(localMax.indexOf(letter) + 1);
      localMax += letter;
    } else {
      localMax += letter;
    }
    if (localMax.length > maxSubStr.length) {
      maxSubStr = localMax;
    }
  }
  return maxSubStr.length;
};
