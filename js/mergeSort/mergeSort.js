const merge = (arr1, arr2) => {
  // set pointers for both arrays
  let i1 = 0;
  let i2 = 0;
  // set output array
  output = [];
  // while within bounds of both arrays
  while (i1 < arr1.length && i2 < arr2.length) {
    // if array1[pointer] < array2[pointer] add that to the output and increment pointer
    if (arr1[i1] < arr2[i2]) {
      output.push(arr1[i1]);
      i1++;
      // if not, add the other item and increment that pointer
    } else {
      output.push(arr2[i2]);
      i2++;
    }
  }

  // the while loop will leave 1 item from either of the arrays, find which array by value of the pointer and add the remaining value to the output array
  if (i1 < arr1.length) output.push(...arr1.slice([i1]));
  if (i2 < arr2.length) output.push(...arr2.slice([i2]));

  // return the output
  return output;
};

const mergeSort = (arr) => {
  // if the input has 1 or less items, return immediately (serves as the base case to avoid infinite loop)
  if (arr.length <= 1) return arr;

  // find the middle of the input array
  const half = Math.ceil(arr.length / 2);

  // return the result of recursively merging arrays
  return merge(mergeSort(arr.slice(0, half)), mergeSort(arr.slice(half)));
};

module.exports = mergeSort;
