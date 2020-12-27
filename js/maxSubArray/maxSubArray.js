// Using Kadane's algorithm to achieve linear time (O(n))
exports.maxSubArray = (nums) => {
  if (!nums) return null;
  if (nums.length === 1) return nums[0];

  // initialise output to negative infinity (array could contain large negative numbers)
  let output = Number.NEGATIVE_INFINITY;
  // initialise local max value
  let localMax = Number.NEGATIVE_INFINITY;

  // loop over array once (O(n) solution)
  for (let i = 0, n = nums.length; i < n; i++) {
    // if the current value is greater than the current highest sum plus the current value, then the current value becomes the new highest sum
    if (nums[i] > localMax + nums[i]) {
      localMax = nums[i];
      // otherwise, add the current value to the local max counter
    } else {
      localMax += nums[i];
    }
    // if the local max exceeds the current intended output, replace it with the local max
    if (localMax > output) output = localMax;
  }

  return output;
};

// Using divide and conquer
exports.maxSubArrayDC = (nums) => {
  if (!nums) return null;
  const findMaxSum = (arr) => {
    if (arr.length === 1) return arr[0];

    // identify middle and length
    const length = arr.length;
    const middle = Math.floor(length / 2);

    // recursively find max in left and right subarrays
    const leftMax = findMaxSum(arr.slice(0, middle));
    const rightMax = findMaxSum(arr.slice(middle));

    // find max array that crosses the midpoint
    let leftCenter = Number.NEGATIVE_INFINITY;
    let rightCenter = Number.NEGATIVE_INFINITY;

    // from center to left
    for (let i = middle - 1, localSum = 0; i >= 0; i--) {
      localSum += arr[i];
      leftCenter = Math.max(localSum, leftCenter);
    }

    // from center to right
    for (let i = middle, localSum = 0; i < length; i++) {
      localSum += arr[i];
      rightCenter = Math.max(localSum, rightCenter);
    }

    return Math.max(leftCenter + rightCenter, leftMax, rightMax);
  };

  return findMaxSum(nums);
};
