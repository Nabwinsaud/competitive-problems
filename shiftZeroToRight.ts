const arr = [0, 1, 0, 0, 3, 4];

function shiftZerosToRight(arr: Array<number>) {
  let right = arr.length - 1;
  const result = [...arr];
  for (let num = 0; num < arr.length; num++) {
    if (arr[num] === 0) {
      // if we end up doing manipulating the original array its not
      //   possible because we are going to directly update the arr which could not be the solution for shifting the elements to right
      // rather we need to create the immutable array in variables like pointer
      const temp = result; // or simply remove the temp no need of it we can directly use result
      temp[num] = temp[right];
      temp[right] = arr[num];
      // we need a pointer need to track of the right elements
      right -= 1;
    }
  }
  return result;
}

const result = shiftZerosToRight(arr);
console.log("🚀 ~ result:", result);
