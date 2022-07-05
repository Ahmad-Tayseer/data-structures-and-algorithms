'use strict';

class binaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    let result = [];
    let traverse = (node) => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  inOrder() {
    let result = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  postOrder() {
    let result = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }

  maxValue(root) {
    if (root === null) return 'Exception';
    else {
      let maxNum = root.value;
      let right = this.maxValue(root.right);
      let left = this.maxValue(root.left);
      if (right > maxNum) maxNum = right;
      if (left > maxNum) maxNum = left;
      return maxNum;
    }
  }

}

module.exports = binaryTree;
