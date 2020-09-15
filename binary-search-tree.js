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
          if (node.left === null) {
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
      };
      return searchTree(node);
    }
  }

  findMinimum (node) {
    const current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMaximum (node) {
    const current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  findValue(data) {
    const current = this.root;
    while (data !== current.data) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else if (current === null) {
        return;
      }
    }
    return current;
  }

  isValuePresent (data) {
    const current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      } else if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      }
    }
    return false;
  }

  remove (data) {
    const removeNode = (node, data) => {
      if (node === null) {
        return null;
      } 
      if(data === node.data) {
        // If the node to be deleted has no children
        if(node.left === null && node.right === null) {
          return null;
        } else if (node.left === null) { // node has no left children
          return node.right;
        } else if (node.right === null) { // node has no right children
          return node.left;
        }

        // when the node to be removed has both left and right children
        var tempNode = node.right;
        while(node.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode (this.root, data);
  }

  postOrderTraversal () {
    // Postorder (Left, Right, Root)
    if (this.root === null) {
      return null;
    } else {
      var result = new Array();
      function treeTraveral (node) {
        node.left && treeTraveral(node.left);
        node.right && treeTraveral(node.right);
        result.push(node.data);
      }
      treeTraveral(this.root);
      return result;
    }
  }

  preOrderTraversal () {
    // Preorder Traversal (Root, Left, Right)
    if (this.root === null) { 
      return null;
    } else {
      var result = new Array();
      function treeTraveral (node) {
        result.push(node.data);
        node.left && treeTraveral(node.left);
        node.right && treeTraveral(node.right);
      }
      treeTraveral(this.root);
      return result;
    }
  }

  inOrderTraversal () {
    // Inorder Traversal (Left, Root, Right)
    if(this.root === null) {
      return null;
    } else {
      var result = new Array();
      function treeTraveral (node) {
        node.left && treeTraveral(node.left);
        result.push(node.data);
        node.right && treeTraveral(node.right);
      }
      treeTraveral(this.root);
      return result;
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

console.log('inOrder: ' + BST.inOrderTraversal());
console.log('preOrder: ' + BST.preOrderTraversal());
console.log('postOrder: ' + BST.postOrderTraversal());