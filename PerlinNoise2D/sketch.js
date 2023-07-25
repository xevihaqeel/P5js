var change = 0.02;
var start = 0;

function setup() {
  createCanvas(800, 800);
  noCursor();
}

function draw() {
  background(235,221,60);
  stroke(89);

  //color mapping 
  var coff = start;
  var r = map(noise(coff), 0, 1, 30, 200);
  var g = 100;
  var b = map(noise(coff), 0, 1, 70, 170);
  fill(r, g, b);
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++) {
    stroke(89);
    var y = map(noise(xoff), 0, .05, height / 2, mouseY);
    vertex(x, y);
    xoff += change;
  }
  endShape();

  beginShape();
  var xoff2 = start;
  for (var y2 = 0; y2 < height; y2++) {
    stroke(89);
    var x2 = map(noise(xoff2), 0, .05, width / 2, mouseX);
    vertex(x2, y2);
    xoff2 += change;
  }
  endShape();
  start += change


  //**3dshits**//}

  // var x = map(noise(xoff), 0, 1, width, -width);
  // var y = map(noise(yoff), 0, 1, height, -height);

  // xoff += 0.02;
  // yoff += 0.02;
  // translate(x, y);
  // sphere(20);
}