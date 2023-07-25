function setup() {
  createCanvas(800, 800, WEBGL);
  //noFill();
}

function draw() {
  background(0);
  var x = 0;
  var y = 0;
  // var z = 100;
  // rotateY(0.03 * frameCount);
  //rotateZ(90);
  //rotateY(-mouseX/60); 
  // rotateZ(-mouseY/60);
  // rotateY(0.03 * frameCount); 
  if (keyIsPressed) {
    rotateY(60);
  }
  rotateZ(0.03 * frameCount);
  //rotateX(0.03 * frameCount);
  drawSphere(x, y, 300);

}

function drawSphere(x, y, d) {
  push();
  translate(x, y, d);
  sphere(d);
  pop();
  //ellipse(x, y, d, d);

  if (d > 2) {
    //drawSphere(x + d * 0.5, y, d * 0.5);
    //drawSphere(x - d * 0.5, y, d * 0.5);
    drawSphere(x, y - d * 0.5, d * 0.5);
    drawSphere(x, y + d * 0.5, d * 0.5);
  }
}