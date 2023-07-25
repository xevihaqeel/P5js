var propped = [];
var wave = [];

var wavingrila;
var layingrila;
var rilahead;
var rilapeek;
var nsgc; 


function setup() {
  imageMode(CENTER);
  createCanvas(1000, 1000);
  wavingrila = loadImage("Wave.png");
  layingrila = loadImage("ElbowPropped.png");
  rilahead = loadImage("Head.png");
  rilapeek = loadImage("NSGC-LOGO.png");
  nsgc = loadImage("NSGC (1).png")  
  //waving rila array 
  /*
  for (var i = 0; i < 5; i++) {
    propped.push(new Rila());
  }
  */
  
  for (var i = 0; i < 10; i++) {
    wave.push(new Rila2());
  }


}

function draw() {
  background(137,227,154);
  //background(255); 
  push();
  rotate(radians(0.8*frameCount));
  image(rilapeek, mouseX, mouseY);
  pop(); 
  for (var i = 0; i < propped.length; i++) {
    propped[i].display();
    propped[i].update();
  }
  for (var j = 0; j < wave.length; j++) {
    wave[j].display();
    wave[j].update();
  }
}
/*
function Rila() {
  this.x = random(width);
  this.y = random(height);

  this.display = function() {
    image(layingrila, this.x, this.y);
  }
  this.update = function() {
    this.x = this.x += 3;
    if (this.x > width) {
      this.x = -200;
    }
  }
}
*/
function Rila2() {
  this.x = random(width);
  this.y = random(height);
  this.display = function() {
  
    image(nsgc, this.x, this.y,random(200,250),random(200,250));
  }
  this.update = function() {
    this.x = this.x -= 3;
    if (this.x < -100) {
      this.x = width;
      this.y = random(height); 
    }

  }
}