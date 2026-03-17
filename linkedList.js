class Node {
  constructor(key, value, next = null) {
    this.next = next;
    this.key = key;
    this.value = value;
  }
}

class LinkedList {
  constructor() {
    this.tail = new Node(null);
    this.head = new Node(null, this.tail);
    this.size = 0;
  }

  append(key, value) {
    let cur = this.head;
    while (cur.next && cur.next != this.tail) {
      cur = cur.next;
    }

    cur.next = new Node(key, value, this.tail);
    this.size++;
  }

  set(key, value) {
    let cur = this.head;

    for (let i = 0; i < this.size; i++) {
      cur = cur.next;
      if (cur.key === key) {
        cur.value = value;
      }
    }
  }

  remove(key) {
    let cur = this.head;
    let prev = this.head;
    for (let i = 0; i < this.size; i++) {
      cur = cur.next;
      if (cur.key == key) {
        prev.next = prev.next.next;
        this.size--;
        return true;
      }
      prev = prev.next;
    }

    return false;
  }

  get(key) {
    let cur = this.head;

    for (let i = 0; i < this.size; i++) {
      cur = cur.next;
      if (cur.key === key) {
        return cur.value;
      }
    }

    return null;
  }

  keys() {
    let cur = this.head;
    let keys = [];

    for (let i = 0; i < this.size; i++) {
      cur = cur.next;
      keys.push(cur.key);
    }

    return keys;
  }

  values() {
    let cur = this.head;
    let values = [];

    for (let i = 0; i < this.size; i++) {
      cur = cur.next;
      values.push(cur.value);
    }

    return values;
  }

  size() {
    return this.size;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(idx) {
    if (this.size < idx + 1) return undefined;

    let cur = this.head;
    for (let i = 0; i < idx + 1; i++) {
      cur = cur.next;
    }

    return cur;
  }

  contains(value) {
    let cur = this.head;
    for (let i = 0; i < this.size; i++) {
      cur = cur.next;
      if (cur.value == value) return true;
    }

    return false;
  }

  findIndex(value) {
    let cur = this.head;
    for (let i = 0; i < this.size; i++) {
      cur = cur.next;
      if (cur.value == value) return i;
    }

    return -1;
  }

  toString() {
    let str = "";

    let cur = this.head;
    for (let i = 0; i < this.size - 1; i++) {
      cur = cur.next;
      str += `( ${cur.value} ) -> `;
    }
    cur = cur.next;
    str += `( ${cur.value} )`;

    return str;
  }
}

export { LinkedList };
