# Leetcode, Data Structures, and Algorithms (with tests)

A collection of my solutions to Leetcode problems, with reference to various algorithms and data structures. Each solution also includes Jest tests to help internalise Test-Driven Development (TDD) as a habit within my workflow.

## Merge Sort

Basic O(nlog(n)) solution involving recursion to split, and two pointers to compare, sort, and merge back together.

## Maximum Subarray problem (\#53)

**Kadane's Algorithm**  
Using Kadane's algorithm to keep track of the 'global maximum value' but replacing it each time the 'local maximum value' exceeds it. This method results in a single iteration over the full array of unknown length, making the time complexity O(n), and one of the most efficient ways to solve the problem.  
**Divide and Conquer**  
Using recursion to split the array into a left, right, and center section, and find the maximum sum from each. They are then compared and the max of the three is returned recursively. This specific solution runs in O(nlog(n)) time as it operates on the same recursive principle as merge sort. A short paper from the University of Texas suggests changes to this method to make it competitive with Kadane's algorithm, and running in O(n) time. (https://personal.utdallas.edu/~daescu/maxsa.pdf)
