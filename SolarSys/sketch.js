var sun = [];

function setup() {
  createCanvas(800, 800);
sun.push(new Planet(0,100)); 
}

function draw() {
  background(0);
sun.show();
  
}