//bfs or level order tranvseral of binary tree using queue.
//input
//assuming we get a root
//traverse using root.left and root.right

//algo
//we see root
//put its left and right in queue
//put into visited array
//now visit childrens

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

let visited = [];
let queue = [];

const BFS = (root) => {
  queue.push(root);
  while (queue.length > 0) {
    visited.push(printLevelorder(queue.shift()));
  }
  return visited;
};

function printLevelorder(node) {
  if (node.left != null) {
    queue.push(node.left);
  }
  if (node.right != null) {
    queue.push(node.right);
  }
  return node.value;
}
