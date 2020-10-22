// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);
    let topNode = this.top;

    if (this.length === 0) {
      node.next = null;
    } else {
      node.next = topNode;
    }

    this.top = node;
    this.length++;
    return this.length;
  }

  pop() {
    let topNode = this.top;

    if (this.length === 0) {
      return null;
    }

    if (this.length === 1) {
      this.top = null;
    }

    this.top = topNode.next;
    this.length--;
    return topNode.value;
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;
