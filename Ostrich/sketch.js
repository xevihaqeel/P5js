var bugs = []; // array of Jitter objects
var girls = [];
var vid;
var vid1;
var xoff2 = 0;
var yoff2 = 0;
var rotoff = 0.02;
var siz;
var sizoff = 0;

var img;

function setup() {
  createCanvas(800, 800, WEBGL);
  vid = createVideo(["Xenia.mp4"]);
  vid1 = createVideo(["Ostriches.mp4"]);
  img = loadImage("IMG_9022.png");
  vid.loop();
  vid.hide();
  vid1.loop();
  vid1.hide();

  // Create objects
  for (var i = 0; i < 30; i++) {
    bugs.push(new Jitter());
  }
  for (var j = 0; j < 30; j++) {
    girls.push(new Women());
  }
}

function draw() {
  background(253,150,39);
  //   	// Orange point light on the right
  // 	pointLight(150, 100, 0, 500, 0, 200);

  // Yellow directional light from the left
  directionalLight(254, 249, 79, -1, 0, 0);

  // pink spotlight from the front
  pointLight(236, 111, 208, 0, 0, 300);
  var x = map(noise(xoff2), 0, 1, -width, width);
  var y = map(noise(yoff2), 0, 1, -400, 400);
  var siz = map(noise(sizoff), -1, 1, 200, 500);
  yoff2 += 0.01;
  xoff2 += 0.01;
  sizoff += 0.05;
  for (var i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
  for (var j = 0; j < girls.length; j++) {
    girls[j].move();
    girls[j].display();
  }

  push();
  translate(x, y, -700);
  rotateY(0.01 * frameCount);
  texture(vid1);
  box(siz);
  pop();
}

//DEZIREA
function Jitter() {
  var xoff = 0;

  this.x = random(-width);
  this.y = random(-height, height);
  this.diameter = random(30, 80);
  this.speed = 1;

  this.move = function() {
    xoff += 0.03;
    this.x += map(noise(xoff), -1, 1, 2, 5);
    // this.y += random(-this.speed, this.speed);
    if (this.x > width) {
      this.x = -width;
    }
    if (this.x < -width) {
      this.x = width;
    }
  };

  this.display = function() {

    rotoff += 0.03;

    // ellipse(this.x, this.y, this.diameter, this.diameter);
    push();
    translate(this.x, this.y);
    texture(img);
    rotateY(-0.04 * frameCount);
    rotateX(0.03 * frameCount / 2)
    box(this.diameter);
    pop();
  };
}

//XENIA
function Women() {
  var xoff = 0;

  this.x = random(-width, width);
  this.y = random(-height);
  this.diameter = random(30, 90);
  this.speed = 3;

  this.move = function() {
    xoff += 0.03;
    this.y += map(noise(xoff), -1, 1, 2, 5);
    if (this.y > height) {
      this.y = -height;
    }
    if (this.y < -height) {
      this.y = height;
    }
  };

  this.display = function() {

    push();
    texture(vid);
    translate(this.x, this.y);
    rotateX(-0.04 * frameCount);
    rotateY(0.03 * frameCount / 2)

    box(this.diameter);
    pop();
  };
}