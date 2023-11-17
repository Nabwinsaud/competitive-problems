const set = new Set<number>();

const set2 = new Set();

const set1 = new Set<Array<number>>([
  [1, 2, 3],
  [4, 5, 6],
]);

set.add(10);
set.add(20);
set.add(30);
set.add(40);

set2.add(10);
set2.add(40);

for (const item of set) {
  console.log("set is", item);
}

for (const [k, v] of set.entries()) {
  console.log("key value is", k, v);
}

for (const [k, v] of set1.entries()) {
  console.log("set 1 key value is", k, v);
}

const wait = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

function* alphabet() {
  for (const character of ["a", "b", "c", "d", "e", "f", "g", "h", "i"]) {
    yield character;
    wait(1000);
  }
}

const intersection1 = [...new Set(set)].filter((x) => set2.has(x));

// differences

const differences = [...new Set(set)].filter((x) => !set2.has(x));
console.log("intersection of two set is", intersection1, differences);

function intersection(nums1: number[], nums2: number[]): number[] {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  let result: number[] = [];

  for (let num of [...set1.values()]) {
    if (set2.has(num)) {
      result.push(num);
    }
  }

  return result;
}

let result = "block scoped nabin bro";
function checkCondition() {
  if (true) {
    let result = "code is fun"; // block scoped variables this will not override the existing result
    console.log("object", result);
  }
}

const notBlockScope = "this is not  lets gooooooo scope";
if (true) {
  const notBlockScope = "this is block scope"; // will not override
  console.log("no block scope in const", notBlockScope);
}

var varCheck = "check check";
function checkVar() {
  if (true) {
    // function scoped
    var varCheck = "check check check"; // function scoped should override the previous one
    console.log("varcheck ", varCheck);
  }
}
checkCondition();
checkVar();
