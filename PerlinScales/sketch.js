var inc = 0.01;
var scl = 20;
var cols, rows;
var zoff = 0;
var particle = [];
var img;

function preload() {
  img = loadImage("FloatingHead.png")
}

function setup() {
  createCanvas(800, 800, WEBGL);
  cols = floor(width / scl);
  rows = floor(height / scl);
  for (var i = 0; i < 100; i++) {
    particle[i] = new Particle();
  }

}

function draw() {
  background(255);
  var coff = 0;
  var r = map(noise(coff), 0, 1, 30, 200);
  var g = 100;
  var b = map(noise(coff), 0, 1, 70, 170);
  fill(r, g, b);
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = (x + y * width) * 4;
      var angle = noise(xoff, yoff, zoff) * TWO_PI;
      var v = p5.Vector.fromAngle(angle);
      xoff += inc;
      stroke(0);
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      box(scl);
      // rect(x * scl, y * scl, scl, scl)
      // image(img, x * scl, y * scl, img.scl, img.scl)
      pop();

      push();
      translate((x * 2) * scl, (x * 2) * scl);
      rotate(v.heading());
      box(scl);
      // image(img, x * scl, y * scl, img.scl, img.scl)
      pop();
    }
    yoff += inc;
    zoff += 0.003;

  }
}