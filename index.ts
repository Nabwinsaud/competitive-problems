import crypto from "node:crypto";
function foo() {
  return "buzz";
}
let x = foo();
console.log("foo is", x);

console.log("user stuff is", crypto.randomUUID().slice(1, 100));
console.log("crypto random is", crypto.randomInt(100000));
