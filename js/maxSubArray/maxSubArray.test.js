const { maxSubArray, maxSubArrayDC } = require('./maxSubArray');

describe('testing maxSubArray (Kadanes algorithm)', () => {
  test('maxSubArray empty array', () => {
    expect(maxSubArray()).toBe(null);
  });

  test('maxSubArray single item array', () => {
    expect(maxSubArray([-2])).toBe(-2);
  });

  test('maxSubArray generic array', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });
});

describe('testing maxSubArrayDC (Divide and conquer)', () => {
  test('maxSubArrayDC empty array', () => {
    expect(maxSubArrayDC()).toBe(null);
  });

  test('maxSubArrayDC single item array', () => {
    expect(maxSubArrayDC([-2])).toBe(-2);
  });

  test('maxSubArrayDC generic array', () => {
    expect(maxSubArrayDC([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  test('maxSubArrayDC generic array (even number of items)', () => {
    expect(maxSubArrayDC([-2, 1, -3, 4, -1, 2, 1, -5])).toBe(6);
  });
});

// [-2,1,-3,4,-1,2,1,-5,4]
