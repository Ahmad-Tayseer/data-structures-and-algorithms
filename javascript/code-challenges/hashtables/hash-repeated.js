const HashTable = require('./hashtables');

function firstRepeatingWord(str) {
  if (!str) {
    return 'No input';
  }
  const hashTable = new HashTable(100);
  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (hashTable.contains(words[i])) {
      return words[i];
    } else {
      hashTable.set(words[i], words[i]);
    }
  }
  return 'No repeated words';
}

module.exports = firstRepeatingWord;
