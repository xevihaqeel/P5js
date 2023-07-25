var propped = [];
var wave = [];

var wavingrila;
var layingrila;
var rilahead;
var rilapeek;
var nsgc;
var bat;

function setup() {
  imageMode(CENTER);
  createCanvas(900, 900, WEBGL);
  wavingrila = loadImage("Wave.png");
  layingrila = loadImage("ElbowPropped.png");
  rilahead = loadImage("Head.png");
  rilapeek = loadImage("PeekingFromBottomLeft.png");
  bat = loadModel('assets/Bat.obj');

  // nsgc = loadImage("NSGC (1).png")  
  //waving rila array 

  for (var i = 0; i < 20; i++) {
    propped.push(new Rila());
  }

  for (var i = 0; i < 20; i++) {
    wave.push(new Rila2());
  }


}

function draw() {
  background(0);
 ambientLight(100);
  //ambientMaterial(200); 
  normalMaterial();
  pointLight(150, 100, 0, -mouseX, -mouseY, 200);
  pointLight(77, 0, 53.4, -mouseX, -mouseY, 300);
  directionalLight(40, 7, 90, -1, 0, 0);

  //image(rilapeek, 200, 800);
  for (var i = 0; i < propped.length; i++) {
    propped[i].display();
    propped[i].update();
  }
  for (var j = 0; j < wave.length; j++) {
    wave[j].display();
    wave[j].update();
  }
}

function Rila() {
  this.x = random(width);
  this.y = random(-height, 900);

  this.display = function() {
    //image(layingrila, this.x, this.y);
    push();
    translate(this.x, this.y);
    rotateY(radians(.8 * frameCount));
    scale(7, 7, 7);
    //color(23.5, 0, 76.5);
    model(bat);
    pop();
  }
  this.update = function() {
    this.x = this.x += 3;
    if (this.x > width) {
      this.x = -450;
      this.y = random(-height, height);
    }
  }
}

function Rila2() {
  this.x = random(width);
  this.y = random(-height, height);
  this.display = function() {

    //image(wavingrila, this.x, this.y,random(200,250),random(200,250));
    push();
    translate(this.x, this.y);
    rotateZ(radians(2 * frameCount));
    //color(76.5, 0, 53.25);
    scale(3, 3, 3);
    model(bat);
    pop();

  }
  this.update = function() {
    this.x = this.x -= 3;
    if (this.x < -450) {
      this.x = width;
      this.y = random(-height, height);
    }

  }
}