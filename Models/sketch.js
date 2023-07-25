var eye;
var tex;
var slow = .003;
var s = 0;
var x = 0;
var y = 0;
var z = 0;

function preload() {
  tex = loadImage("eye_clear_NORMAL.png")

}

function setup() {
  createCanvas(800, 800, WEBGL);
  eye = loadModel('eyes_set_SMOOTH.obj');
}

function draw() {
  background(0);
  push();
  translate(x, y);
  rotateX(frameCount * slow);
  rotateY(frameCount * slow);
  scale(20, 20, 5);
  fill(34, 50, 08);
  model(eye);
  pop();

}