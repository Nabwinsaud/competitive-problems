function countPairs2(nums: number[], target: number) {
  const value: number[] = [];
  for (let i = 0; i < nums.length; ++i) {
    for (let j = 0; j < nums.length; ++j) {
      i != j && i < j && nums[i] + nums[j] < target
        ? value.push(...[i, j])
        : -1;
    }
  }
  return value.length;
}

function countPairs(nums: number[], target: number) {
  return nums.reduce((acc, val, index) => {
    console.log("acc previous value is", acc, val);
    for (let i = index + 1; i < nums.length; i++) {
      if (nums[i] + val < target) acc++;
    }
    return acc;
  }, 0);
}

const a = countPairs([1, 2 - 1, -3, -1], 2);

console.log("a", a);
