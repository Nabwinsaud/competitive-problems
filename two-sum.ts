function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];
    if (map.has(difference)) {
      console.log("differences", map.get(difference), i);
      return [map.get(difference) as number, i];
    }
    console.log("random data is", map);
    console.log("The coder is", nums[i], i);
    map.set(nums[i], i);
  }
  return [];
}

console.log(twoSum([1, 2, 3, 4, 5], 5));
