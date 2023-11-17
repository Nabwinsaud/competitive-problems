const m = new Map([
  ["color", "blue"],
  ["age", "20"],
  ["name", "Nabin"],
]);

const color = m.get("color");

const age = m.get("age");
console.log("clor", color);

for (const [k, v] of m.entries()) [console.log("key value is", k, v)];

for (const [key, values] of m) {
}

for (const key of m.keys()) {
  console.log("value us");
}

for (const value of m.values()) {
}

m.forEach((value, key) => {});
const a = [...m.keys()];
const v = [...m.values()];

console.log("value is", a, v);

const m1 = new Map();

m1.set("name", "Nabin");

m1.delete("name");
m1.set("age", 20);
m1.set("address", { street: "Kathmandu", province: "3", place: "Chaysal" });

console.log("map is", m1.get("name"));
console.log("map is", m1.get("address"));
console.log("map is", m1.get("age"), m1.size);
