const mergeSort = require('./mergeSort');

describe('testing mergeSort', () => {
  test('merge sort empty array', () => {
    expect(mergeSort([])).toStrictEqual([]);
  });

  test('merge sort single item array', () => {
    expect(mergeSort([1])).toStrictEqual([1]);
  });

  test('merge sort even length array', () => {
    expect(mergeSort([1, 3, 2, 4])).toStrictEqual([1, 2, 3, 4]);
  });

  test('merge sort odd length array', () => {
    expect(mergeSort([1, 3, 2, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  });

  test('merge sort already sorted array', () => {
    expect(mergeSort([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
  });

  test('merge sort reversed array', () => {
    expect(mergeSort([4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4]);
  });
});
