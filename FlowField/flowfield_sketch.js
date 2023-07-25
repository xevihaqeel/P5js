var inc = 0.01;
var scl = 10;
var cols;
var rows;
var zoff = 0;
var particle = [];
var flowfield = [];

function setup() {
  createCanvas(1200, 900);
  cols = floor(width / scl);
  rows = floor(height / scl);

  for (var i = 0; i < 1000; i++) {
    particle[i] = new Particle();
    flowfield = new Array(cols * rows);
    // background(161, 187, 243);
    background(0);

  }
}

function mousePressed() {
  clear();
  background(0);
}

function draw() {

  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = (x + y) * cols;

      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;

      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);

      flowfield[index] = v;

      xoff += inc;
      // stroke(0, 80);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(1);
      // // line(0, 0, scl, 0);

      // pop();
    }
    yoff += inc;
    zoff += 0.0001;

  }
  for (var i = 0; i < particle.length; i++) {
    particle[i].follow(flowfield);
    particle[i].update();
    particle[i].edges();
    particle[i].show();

  }
}