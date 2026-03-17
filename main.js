import { HashMap } from "./hashMap.js";

const test = new HashMap();

// initial inserts
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

// expected after 12 inserts
console.log(test.length()); // 12
console.log(test.get("apple")); // "red"
console.log(test.get("lion")); // "golden"
console.log(test.has("frog")); // true
console.log(test.has("moon")); // false

// overwrite existing keys
test.set("apple", "green");
test.set("banana", "gold");
test.set("carrot", "purple");

// expected: length unchanged
console.log(test.length()); // 12
console.log(test.get("apple")); // "green"
console.log(test.get("banana")); // "gold"
console.log(test.get("carrot")); // "purple"

// trigger resize
test.set("moon", "silver");

// expected after resize
console.log(test.length()); // 13
console.log(test.get("moon")); // "silver"
console.log(test.has("moon")); // true

// overwrite after resize
test.set("moon", "white");
test.set("dog", "black");

// expected: still same length
console.log(test.length()); // 13
console.log(test.get("moon")); // "white"
console.log(test.get("dog")); // "black"

// remove tests
console.log(test.remove("frog")); // true
console.log(test.has("frog")); // false
console.log(test.get("frog")); // null or undefined
console.log(test.length()); // 12

console.log(test.remove("not here")); // false

// keys / values / entries
console.log(test.keys());
// expected: array containing these 12 keys:
// ["apple","banana","carrot","dog","elephant","grape","hat","ice cream","jacket","kite","lion","moon"]
// order may differ

console.log(test.values());
// expected: array containing these 12 values:
// ["green","gold","purple","black","gray","purple","black","white","blue","pink","golden","white"]
// order may differ

console.log(test.entries());
// expected: array containing these pairs:
// [
//   ["apple","green"],
//   ["banana","gold"],
//   ["carrot","purple"],
//   ["dog","black"],
//   ["elephant","gray"],
//   ["grape","purple"],
//   ["hat","black"],
//   ["ice cream","white"],
//   ["jacket","blue"],
//   ["kite","pink"],
//   ["lion","golden"],
//   ["moon","white"]
// ]
// order may differ

// clear
test.clear();

console.log(test.length()); // 0
console.log(test.keys()); // []
console.log(test.values()); // []
console.log(test.entries()); // []
console.log(test.has("apple")); // false
console.log(test.get("apple")); // null or undefined
