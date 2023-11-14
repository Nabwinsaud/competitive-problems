// Write a function:
// class Solution { public int solution(int[] A); }
// that, given an array A of N integers, returns the smallest positive integer (greater than 0)
// that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.
// Write an efficient algorithm for the following assumptions:
// • N is an integer within the range [1..100,000];
// • each element of array A is an integer within the range [−1,000,000..1,000,000].

const numbers: number[] = [1, 3, 6, 4, 1, 2];
// const numbers: number[] = [-1,-3];
// const numbers: number[] = [1,2,3];
function shouldReturnSmallestPositiveInteger(arr: number[]) {
  const set = new Set<number>();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      set.add(arr[i]);
    }
  }

  let smallestPositive = 1;
  while (set.has(smallestPositive)) {
    // iteration 1 smallestPositive = 1 since set contain 1 and loop continues to next iteration
    // iteration 2 smallestPositive = 2 since set contain 2 and loop continues to next iteration
    // iteration 3 smallestPositive = 3 since set contain 3 and loop continues to next iteration
    // iteration 4 smallestPositive = 4 since set contain 4 and loop continues to next iteration
    // iteration 5 smallestPositive = 5 since set does not contain 5 and terminate the loop and return
    smallestPositive += 1;
  }
  return smallestPositive;
}

const res1 = shouldReturnSmallestPositiveInteger(numbers);
console.log("res", res1);
