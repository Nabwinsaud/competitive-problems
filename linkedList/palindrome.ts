function palindrome(s: string) {
  let len = s.length;

  let mid = Math.floor(len / 2);

  for (let i = 0; i < mid; i++) {
    if (s[i] !== s[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("madam"));

// m !== []

// madam
// m !==[5-1-0]
// m!==[4] m !==m
// a!==[5-1-1] a!==a
// d!==[5-1-2] d!==d
// ma
// awdnsnsn
