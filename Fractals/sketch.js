
var tree;
var max_dist = 100;
var min_dist = 10;

function setup() {
  createCanvas(800, 800);
  tree = new Tree();
}

function draw() {
  background(255);
  // tree.show();
  // tree.grow();
    tree.show(); 
if (mouseIsPressed){
  tree.grow();
}
}

