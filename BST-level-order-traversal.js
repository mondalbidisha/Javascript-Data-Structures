class Node {
  constructor (data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null;
  }

  add (data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
    } else {
      const searchTree = (node) => {
        if (data < node.data) {
          if(node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      }
      return searchTree(this.root);
    }
  }

  preOrderTraversal () {
    if(this.root === null) {
      return null;
    } else {
      var result = new Array();
      function treeTraversal (node) {
        result.push(node.data);
        node.left && treeTraversal(node.left);
        node.right && treeTraversal(node.right);        
      }
      treeTraversal(this.root);
      return result;
    }
  }

  postOrderTraversal () {
    if(this.root === null) {
      return null;
    } else {
      var result = new Array();
      function treeTraversal (node) {
        node.left && treeTraversal(node.left);
        node.right && treeTraversal(node.right);        
        result.push(node.data);
      }
      treeTraversal(this.root);
      return result;
    }
  }

  inOrderTraversal () {
    if(this.root === null) {
      return null;
    } else {
      var result = new Array();
      function treeTraversal (node) {
        node.left && treeTraversal(node.left);
        result.push(node.data);
        node.right && treeTraversal(node.right);        
      }
      treeTraversal(this.root);
      return result;
    }
  }

  levelOrderTraversal () {
    var result = new Array();
    var Q = new Array();

    if(this.root !== null) {
      Q.push(this.root);
    
      while(Q.length > 0) {
        var node = Q.shift();
        result.push(node.data);
        if(node.left !== null) {
          Q.push(node.left);
        }
        if(node.right !== null) {
          Q.push(node.right);
        }
      }
      return result;
    } else {
      return null;
    }
  }
}

const BST = new BinarySearchTree();

BST.add(9);
BST.add(4);
BST.add(17);
BST.add(3);
BST.add(6);
BST.add(22);
BST.add(5);
BST.add(7);
BST.add(20);

console.log('inOrder: ' + BST.levelOrderTraversal());
console.log('inOrder: ' + BST.inOrderTraversal());
console.log('preOrder: ' + BST.preOrderTraversal());
console.log('postOrder: ' + BST.postOrderTraversal());