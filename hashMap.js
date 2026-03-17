import { LinkedList } from "./linkedList.js";

class HashMap {
  constructor() {
    this.arr = [];
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    let i = this.hash(key);

    // if dne set to new linked list
    if (this.arr[i] === undefined) {
      this.arr[i] = new LinkedList();
    }

    // set or append (grow only on append)
    if (this.arr[i].get(key) !== null) {
      this.arr[i].set(key, value);
    } else {
      // grow
      if ((this.size + 1) / this.capacity > this.loadFactor) {
        this.capacity *= 2;

        // rehash
        let entries = this.entries();
        this.clear();
        for (let entry of entries) {
          this.set(entry[0], entry[1]);
        }

        i = this.hash(key);

        // if dne set to new linked list
        if (this.arr[i] === undefined) {
          this.arr[i] = new LinkedList();
        }
      }

      this.arr[i].append(key, value);
      this.size++;
    }
  }

  get(key) {
    const i = this.hash(key);
    if (this.arr[i] != undefined) {
      return this.arr[i].get(key);
    }
    return null;
  }

  has(key) {
    const i = this.hash(key);
    return this.arr[i] != undefined && this.arr[i].get(key) != null;
  }

  remove(key) {
    const i = this.hash(key);
    if (this.arr[i] != undefined) {
      const removed = this.arr[i].remove(key);
      if (removed) this.size--;
      return removed;
    }
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.arr = [];
    this.size = 0;
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.capacity; i++) {
      if (this.arr[i] != undefined) {
        keys.push(...this.arr[i].keys());
      }
    }
    return keys;
  }

  values() {
    let values = [];
    for (let i = 0; i < this.capacity; i++) {
      if (this.arr[i] != undefined) {
        values.push(...this.arr[i].values());
      }
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
