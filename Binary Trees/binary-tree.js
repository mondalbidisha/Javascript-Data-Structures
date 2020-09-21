class Node {
  constructor (data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor () {
    this.root = null;
  }

  add (data) {
    if (this.root === null) {
      this.root = new Node(data);
    } else {
      let Q = new Array();
      if(this.root !== null) {
        Q.push(this.root);
        while(Q.length > 0) {
          let node = Q.shift();
          if(node.left === null) {
            node.left = new Node(data);
            return;
          } else {
            Q.push(node.left);
          }
          if(node.right === null) {
            node.right = new Node(data);
            return;
          } else {
            Q.push(node.right);
          }
        }
      }
    }
  }

  levelOrderTraversal () {
    let result = new Array();
    let Q = new Array();

    if(this.root !== null) {
      Q.push(this.root);

      while(Q.length > 0) {
        let tempNode = Q.shift();
        result.push(tempNode.data);
        if(tempNode.left !== null) {
          Q.push(tempNode.left);
        } 
        if(tempNode.right !== null) {
          Q.push(tempNode.right);
        }
      }
      return result;
    } else {
      return null;
    }
  }
}

const BT = new BinaryTree();

BT.add(9);
BT.add(4);
BT.add(17);
BT.add(3);
BT.add(6);
BT.add(22);
BT.add(5);
BT.add(7);
BT.add(20);

console.log('levelOrder: ' + BT.levelOrderTraversal());

