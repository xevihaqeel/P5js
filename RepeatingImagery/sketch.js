var x, y, z, w, h, c;
var img, can, counter;
var imgs = [];
var pics = [];

function preload() {
  for (var i = 0; i < 10; i++) {
    imgs[i] = loadImage('Yas' + i + '.jpg');
  }
  img = loadImage('Yas0.jpg');
}

//this is movement// 
function setup() {
  imageMode(CENTER);
  createCanvas(912, 912);
  // x = 0;
  // y = 0;
  z = 0;
  counter = 0;
  x = width / 2;
  y = height / 2;
  s = 300;
  mod = .5;
  w = img.width;
  h = img.height;

  background(255);
  var r = floor(random(1, imgs.length));
  // noCursor();
  // image(img, width / 2, height / 2);
  //image(imgs[r], width / 2, height / 2);
}

function mouseClicked() {
  // counter++;
  // if (counter < 1) {
  //   image(img, width / 2, height / 2, w, h);
  // } else {
  // }
  var r = floor(random(0, imgs.length));
  if (w > 0) {
    //image(imgs[r], random(width), random(height), w / 2, h / 2)
    // rotate(30);
    if (keyIsPressed) {
      if (keyCode == TAB) {
        image(imgs[r], width / 2, height / 2, w *= .75, h *= .75);
      }
    } else {
      image(imgs[r], floor(random(width)), floor(random(height / 2, height)), w *= .65, h *= .65);

    }
  }
}



function draw() {

  var r = floor(random(0, imgs.length));
  if (w > 0) {
    //image(imgs[r], floor(random(width)), floor(random(height / 2, height)), w *= .65, h *= .65);
    //image(imgs[r], random(width), random(height), w / 2, h / 2)
    // rotate(30);
    // image(imgs[r], width / 2, height / 2, w *= .75, h *= .75);
  }
}

function Photos(x, y, img) {
  this.img = img;
  this.x = width / 2;
  this.y = height / 2;

  this.w = this.img.width;
  this.h = this.img.height;

  this.display = function() {
    imageMode(CENTER);
    image(this.img, this.x, this.y, w -= 100, h -= .5);
  }
  this.update = function() {

  }
}