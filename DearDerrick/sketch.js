var girls = [];

var xoff = 0;

function setup() {
  createCanvas(800, 800);
  var x = 0; 
  var y = random(height); 
  for (var i = 0; i < 50; i++) {
girls.push(new Women(x,y)); 
}
}

function draw() {
  // var x = map(noise(xoff), 0, 1, 0, width);
  // var y = random(0,height);
  xoff += 0.01;
  background(255);

  for (var i = 0; i < girls.length; i++) {
    girls[i].update();
    girls[i].display();
  }

 
}

function Women(x,y) {

  this.x = x;
  this.y = y; 


  this.update = function() {

  }

  this.display = function() {
    ellipse(this.x, this.y, 100, 100);
  }
}