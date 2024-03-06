class Node {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!curr.children[char]) {
        curr.children[char] = new Node();
      }
      curr = curr.children[char];
    }
    curr.isWord = true;
  }

  search(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!curr.children[char]) {
        return false;
      }
      curr = curr.children[char];
    }
    return curr.isWord;
  }

  print() {
    const word = [];
    this._printHelper(this.root, "", word);
    return word;
  }

  _printHelper(node, prefix, word) {
    if (node.isWord) {
      word.push(prefix);
    }
    for (let char in node.children) {
      this._printHelper(node.children[char], prefix + char, word);
    }
  }

  getWord(prefix) {
    let curr = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!curr.children[char]) {
        return [];
      }
      curr = curr.children[char];
    }
    return this._prefixHelper(curr, prefix);
  }

  _prefixHelper(node, prefix) {
    let word = [];
    if (node.isWord) {
      word.push(prefix);
    }
    for (let char in node.children) {
      word = word.concat(
        this._prefixHelper(node.children[char], prefix + char)
      );
    }
    return word;
  }
}

const trie = new Trie();
trie.insert("sheheem");
trie.insert("sajad");
trie.insert("jaseem");
trie.insert("abin");
trie.insert("farhan");
trie.insert("lukman");
trie.insert("junaid");
trie.insert("jahaz");
console.log(trie.search("sheheem"));
console.log(trie.getWord(""));
console.log(trie.print());
