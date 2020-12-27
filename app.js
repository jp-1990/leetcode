const { mergeSort } = require('./js/mergeSort/mergeSort');
const { maxSubArray, maxSubArrayDC } = require('./js/maxSubArray/maxSubArray');

// console.log(mergeSort([1, 3, 4, 2]));
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log('Output=', maxSubArrayDC([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
