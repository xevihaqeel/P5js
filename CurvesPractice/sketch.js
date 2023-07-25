var osc = 0;
var glasses = [];

function setup() {
  createCanvas(1000, 1000);
  // glasses = new hourglass();
  for (var i = 0; i < 20; i++) {
    glasses.push(new hourglass(random(width), random(height)));
  }
}

function draw() {
  osc++;
  background(0);

  for (var i = 0; i < glasses.length; i++) {
    glasses[i].display();
    glasses[i].update();
  }

}

function hourglass(x, y) {
  this.x = random(-width, width);
  this.y = height / 2;

  this.w = 200;
  this.h = 200;
  var xSpeed = 2;
  var ySpeed = 20;


  this.update = function() {
    this.y += ySpeed;
    if (this.y > height || this.y < 0 + this.h) {
      ySpeed *= -1;
    }


  }
  this.display = function() {

    strokeWeight(4);
    stroke(osc % 256);
    smooth();
    fill(255, osc % 256, osc % 200);
    arc(this.x, this.y - this.h / 2, this.w, this.h, 0, TWO_PI);
    fill(osc % 256, osc % 200, 255);

    arc(this.x, this.y - this.h / 2, this.w / 2, this.h / 2, 0, TWO_PI);
  }

}