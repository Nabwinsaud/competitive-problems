/**
 * two pointer techniques
 */

function sortedSquare(nums: number[]): number[] {
  let left = 0;
  let right = nums.length - 1;

  const output: number[] = new Array(nums.length);

  let index = right;
  console.log("array size", output);
  // right - 4

  while (left <= right) {
    // -4 * -4 = 16
    // 10 *10 = 100

    // right - 3
    // -4 * -4 = 16
    // 3*3=9
    // left > right

    // 3rd iteration
    // left - 1
    // right - 3
    // -1 * -1 = 1
    // 3*3= 9
    // right > left

    // 4th
    // right -2
    // left -1
    // 1
    // 0
    // left > right

    // 5th ite
    // left - 2
    // right - 2
    // 0 ,0
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];

    if (leftSquare > rightSquare) {
      output[index--] = leftSquare;
      // [-,-,-,16,100]
      // [-,1,9,16,100]
      left++;
    } else {
      output[index--] = rightSquare;
      // [-,-,-,-,100]
      // [-,-,9,16,100]
      right--;
    }
  }
  return output;
}

const a = sortedSquare([-4, -1, 0, 3, 10]);

console.log("a should be ", a);
