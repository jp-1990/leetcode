// Given two binary strings a and b, return their sum as a binary string.

exports.addBinary = (a, b) => {
  // O(1) assignments and if statements are constant time
  const result = [];
  const top = a.length >= b.length ? a.split('') : b.split('');
  const bot = a.length < b.length ? a.split('') : b.split('');

  // Worst case O(n) if one of the inputs begins empty
  // Add leading zeros to the shorter array until they are the same length
  while (top.length !== bot.length) {
    if (top.length > bot.length) {
      bot.unshift('0');
    } else if (bot.length > top.length) {
      top.unshift('0');
    }
  }

  // For loop containing if statements O(n)
  // Knowing sum can only be 0, 1, 2 or 3, apply if logic for desired outcome
  let carry = 0;
  for (let i = top.length - 1; i >= 0; i--) {
    // if the sum is under 2, add the sum to the output
    if (+top[i] + +bot[i] + carry < 2) {
      result.unshift(+top[i] + +bot[i] + carry);
      if (carry > 0) carry--;
      // if the sum is 3 there must be a carried value from the previous sum, add that to result
    } else if (+top[i] + +bot[i] + carry === 3) {
      result.unshift(0 + carry);
      carry = 1;
      // else cover event where sum === 2, carry the 1 and add 0 to the result
    } else {
      result.unshift(0);
      carry = 1;
    }
  }

  // O(1) if statement
  if (carry > 0) result.unshift(1);

  // O(1)
  return result.join('');
};

// Time complexity is O(n) because the function uses the length of the longest input element to loop over
