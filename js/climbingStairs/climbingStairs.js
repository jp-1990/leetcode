// You are climbing a staircase, it takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Essentially asking to find the nth fibonacci number
// O(n) solution that generates the sequence up to n then returns the value at the nth index
exports.climbingStairs = (n) => {
  // O(1)
  if (n < 4) return n;
  // O(1)
  const output = [1, 1, 2, 3];
  // O(n)
  for (let i = 4; i <= n; i++) {
    output.push(output[i - 1] + output[i - 2]);
  }
  return output[n];
};
