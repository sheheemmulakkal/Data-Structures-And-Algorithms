class HashTable {
  constructor(size) {
    this.table = Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key[i].charCodeAt();
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKey = bucket.find((item) => item[0] === key);
      if (sameKey) {
        sameKey[1] = value;
      } else {
        this.table[index].push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) return null;
    const sameKey = bucket.find((item) => item[0] === key);
    return sameKey ? sameKey[1] : null;
  }

  print() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        console.log(...this.table[i]);
      }
    }
  }
}

const ht = new HashTable(10);

ht.set("name", "sheheem");
ht.set("place", "Malappuram");
ht.set("name", "Sajad");
ht.set("mane", "Afrid");
ht.set("age", 22);
ht.print();
