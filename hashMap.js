import { LinkedList } from "./linkedList.js";

class HashMap {
  constructor() {
    this.arr = [];
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.length = 0;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + (key.charCodeAt(i) % capacity);
    }

    return hashCode;
  }

  set(key, value) {
    this.length++;

    // grow
    if (this.length / this.capacity > this.loadFactor) {
      this.capacity *= 2;

      // rehash
      let entries = this.entries();
      this.clear();
      for (entry of entries) {
        this.set(entry[0], entry[1]);
      }
    }

    const i = hash(key);
    // if dne set to new linked list
    if (arr[i] === null) {
      arr[i] = new LinkedList();
    }

    arr[i].append(key, value);
  }

  get(key) {
    const i = hash(key);
    return arr[i].get(key);
  }

  has(key) {
    const i = hash(key);
    return arr[i].get(key) != null;
  }

  remove(key) {
    const i = hash(key);
    this.length--;
    return arr[i].remove(key);
  }

  length() {
    return this.length;
  }

  clear() {
    this.arr = [];
  }

  keys() {
    let keys = [];
    for (let i = 0; i < capacity; i++) {
      keys.push(...arr[i].keys());
    }
    return keys;
  }

  values() {
    let values = [];
    for (let i = 0; i < capacity; i++) {
      values.push(...arr[i].values());
    }
    return values;
  }

  entries() {
    const k = this.keys();
    const v = this.values();

    // like python zip
    return k.map((x, i) => [x, v[i]]);
  }
}

export { HashMap };
