function isHappyNumber(num: number) {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum === 1;

  // 10
  // 1 + 0 = 1
  // 2
  // 4
  // 16
  // 1 + 36 = 37
  // 3 + 49 = 52
  // 25 + 4 = 29
  // 4 + 81 = 85
  // 64 + 25 = 89
  // 64 + 81 = 145
  // 1 + 16 + 25 = 42
  // 16 + 4 = 20
  // 4 + 0 = 4
  // 16
  // 1 + 36 = 37
  // 9 + 49 = 58
}

console.log("isHappy is ", isHappyNumber(7));
