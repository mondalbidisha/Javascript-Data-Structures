// A program to find the first pair in a sorted array that adds upto the given sum.
// Time Complexity = O(n)

// Logic - 2 pointers problem where we move pointers from start and end of an array and 
// find a pair that matches the set criteria

const sumZero = (array, sum) => {
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while(leftPointer < rightPointer) {
    let possibleSum = array[leftPointer] + array[rightPointer];
    if (possibleSum === sum) {
      console.log(`Found Pair - [${array[leftPointer]}, ${array[rightPointer]}]`);
      return;
    } else if (possibleSum < sum) {
      leftPointer ++;
    } else if (possibleSum > sum) {
      rightPointer --;
    }
  }
  console.log(`No pairs found`);
}

sumZero([-3, -2, -1, 0, 1, 2], 5);
sumZero([-3, -2, -1, 0, 1, 2], 0);
sumZero([-3, -2, -1, 0, 1, 2], 1);

