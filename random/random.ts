// A non-empty array A consisting of N integers is given. The array contains an odd number of
// elements, and each element of the array can be paired with another element that has the
// same value, except for one element that is left unpaired.
// For example, in array A such that:
// A[0] = 9 A[1] = 3 A[2] = 9
// A[3] = 3 A[4] = 9 A[5] = 7
// A[6] = 9
// • the elements at indexes 0 and 2 have value 9,
// • the elements at indexes 1 and 3 have value 3,
// • the elements at indexes 4 and 6 have value 9,
// • the element at index 5 has value 7 and is unpaired.
// Write a function:
// class Solution { public int solution(int[] A); }
// that, given an array A consisting of N integers fulfilling the above conditions, returns the
// value of the unpaired element.
// For example, given array A such that:
// A[0] = 9 A[1] = 3 A[2] = 9
// A[3] = 3 A[4] = 9 A[5] = 7
// A[6] = 9
// the function should return 7, as explained in the example above.
// Write an efficient algorithm for the following assumptions:
// • N is an odd integer within the range [1..1,000,000];
// • each element of array A is an integer within the range [1..1,000,000,000];

const arr: number[] = [9, 3, 9, 3, 9, 7, 9];

function oddUnPairOccurrence(arr: number[]) {
  // using the set method to uniquely check the array element
  const set = new Set();

  for (let i = 0; i < arr.length; i++) {
    // if duplicate element exists in the set remove it
    if (set.has(arr[i])) {
      set.delete(arr[i]);
    } else {
      set.add(arr[i]);
    }
  }
  //   finally return the unpaired element
  return Array.from(set)[0]; // it return in the format of set in our case we need in string so converting the set of object to array and extracting from arr index
}

// const result = oddUnPairOccurrence(arr);
// console.log("res", result);

// [1,2,3,4,5]
function oddOccurrencesInArray(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    // console.log("index is", arr.indexOf(arr[i]));
    console.log("index is", arr.lastIndexOf(arr[i]));
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }
}

// const result = oddOccurrencesInArray([1, 2, 3, 4, 5, 1, 2, 3, 4]);
// console.log(result);

function result(arr: number[]) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res ^= arr[i];
    return res;
  }
}

const result1 = result([1, 2, 3, 4, 5, 1, 2, 3, 4]);

// console.log(result1);

// function solution(A: number[]): number {
//   const set = new Set<number>();

//   for (let i = 0; i < A.length; i++) {
//     if (set.has(A[i])) {
//       set.delete(A[i]);
//     } else {
//       set.add(A[i]);
//     }
//   }

//   return Array.from(set)[0];
// }

// const re = solution([1, 2, 3, 4, 7, 1, 2, 3, 4]);

// console.log(re);
