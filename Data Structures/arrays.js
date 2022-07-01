// INTRO

const strings = ["a", "b", "c", "d"];
// 4*4= 16 bytes of storage
console.log(strings[2]); //O(1)
// push
strings.push("e"); // O(1)
// pop
strings.pop(); // O(1)
// unshift
strings.unshift("x"); // O(n)
// splice
strings.splice(2, 0, "alien"); // O(n)
console.log(strings);

// IMPLEMENTING AN ARRAY

class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
const newArr = new myArray();
console.log(newArr.push("hi"));
newArr.push("hello");
newArr.push("Pushkar");
newArr.push("!!!!");
newArr.delete(2);
console.log(newArr);
