var x = 0;
var y = 0;
var z = 0;


function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(0);

  ambientLight(150);
  var x1 = x + 200;
  var x2 = x - 200;
  var y1 = y + 200;
  var y2 = y - 200;
  var z1 = z - 300;
  fill(255);
  beginShape();
  vertex(-mouseX, -mouseY, 0)
  vertex(x1, y2, z1);
  vertex(x2, y2, z1);
  vertex(x1, y1, z1);
  vertex(x2, y1, z1);
  endShape(CLOSE);
}