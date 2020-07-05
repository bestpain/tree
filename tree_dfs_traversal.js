//dfs or pre order tranvseral(root,left,right) of binary tree using recursion.

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);
let n6 = new Node(6);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.right = n6;

var output = [];
function preOrderTravseral(root) {
  if (root != null) {
    output.push(root.value);
    preOrderTravseral(root.left);
    preOrderTravseral(root.right);
  } else {
    return; //base condition
  }
}
