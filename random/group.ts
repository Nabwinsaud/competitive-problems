import "core-js";
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

// type Inventory = (typeof inventory)[number];

const restock = { restock: true };
const sufficient = { restock: false };
// const result = inventory.groupToMap(({ quantity }) =>
//   quantity < 6 ? restock : sufficient
// );
// console.log(result.get(restock));

// [{ name: "b
//* still in proposal stage
const res2 = inventory.group((invent) => {
  return invent.name;
});

console.log("res2", res2);
