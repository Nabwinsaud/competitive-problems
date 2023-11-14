// move all the negative numbers to beginning and positive to end with constant extra space
// input -12 11 -12 -5 6 -7 5 -3 -6
// output -12 -13 -5 -7  -3 11 6 5

function moveNegativeToFirst(arr: number[], num: number) {
  let j = 0;
  for (let i = 0; i < num; i++) {
    if (arr[i] < 0) {
      //   if (i !== j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    // }
    // j++;
  }
  return arr;
}

const arr: number[] = [-12, 11, -12, -5, 6, -7, 5, -3, -6];

const num = moveNegativeToFirst(arr, arr.length);
console.log("🚀 ~ file: moveNegativeNumber.ts:12 ~ num:", num);
