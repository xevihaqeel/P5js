 var attractors = [];
var particles = [];
var x = 0;
var y = 0;
var butX = -400; 
var butY = -400;
var butX1 = -400; 
var butY1 = -340;
var butX2 = -400; 
var butY2 = -280;

var vid;
var osc1 = 0;

var distances = [50];
var maxDistance;
var spacer;
var osc = 0;


function setup() {

  spacer = 100;
  let canvas = createCanvas(800, 800, WEBGL);
  canvas.parent('perlinNoisePractice');
  noStroke();

}




function mousePressed() {
  
  var d = dist(mouseX-400,mouseY-400,butX,butY);
  var d1 = dist(mouseX-400,mouseY-400,butX1,butY1);
  var d2 = dist(mouseX-400,mouseY-400,butX2,butY2); 
  if (d > 50 && d1 > 50 && d2 >50) {
    attractors.push(createVector(mouseX-= 400,mouseY-=400));
  }else if(d < 50){
    particles.push(new Particle(x, y));
  }
  if(d1 < 50 && d > 50){
    particles.splice(0,1); 
  }else if(d2 < 50 && d1 > 50 && d >50){
  attractors.splice(0,1);
  }
  
}

 
//for creation of particles
function keyPressed() {
  if (keyCode == UP_ARROW) {
    particles.push(new Particle(x, y));
  }
  for (var i = 0; i < particles.length; i++) {
    var particle = particles[i];
    if (keyCode == DOWN_ARROW) {
      particles[i].lifetime++;
    }
  }
}


function draw() {
  
  //background(50);
  background(0, 255, 0);
  var c = 255;
  var c1 = 255;
  var c2 = 255;
  
  var d = dist(mouseX-400,mouseY-400,butX,butY);
  var d1 = dist(mouseX-400,mouseY-400,butX1,butY1);
  var d2 = dist(mouseX-400,mouseY-400,butX2,butY2); 
  if(mouseIsPressed && d < 50){
    c = 0;
  }
  if(mouseIsPressed && d1 < 50 && d > 50){
    c1 = 0;
  }
  if(mouseIsPressed && d2 < 50 && d1 > 50 && d >50 ){
    c2 = 0;
  }
  fill(c);
  rect(butX,butY,50,50);
  fill(c1); 
  rect(butX1,butY1,50,50);
  fill(c2);
  rect(butX2,butY2,50,50);
  
  
  // directionalLight(0, 100, 255, -1, 0, 0);
  // pointLight(150, 100, 0, 300, 0, 600);

  for (var j = 0; j < attractors.length; j++) {
    var size = 50;
    var grow = 2;
    push();
    translate(attractors[j].x, attractors[j].y);
    //size += grow;
    rotateY(sin(0.05 * frameCount));
    rotateX(0.03 * frameCount);
    rotateZ(0.03 * frameCount);
    fill(255);
    torus(size, 10);
    pop();

  }
  for (var i = 0; i < particles.length; i++) {
    var particle = particles[i];
    for (var k = 0; k < attractors.length; k++) {
      particle.attracted(attractors[k]);
    }
    particle.update();
    particle.show();
  }
  
  if(particles.length > 20){
    particles.splice(0,1); 
  }
}

function Particle(x, y, r, pos) {
  if (pos) {
    this.pos = pos.copy();
  } else {
    this.pos = createVector(x, y);
  }
  //SIZE. Not necessary, working on it for mitosis
  this.r = r || 12;
  this.prev = createVector(x, y);
  this.vel = p5.Vector.random3D(); 
  this.acc = createVector();
  //for color change
  this.osc = 0;
  this.osc1 = 5;
  //for removal 
  this.lifetime = 400;
  this.speed = 7;
  this.speed1 = 4;
  //creates empty array for the sake of saving locations
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    //for color change
    this.osc += this.speed;
    if (this.osc > 256) {
      this.speed *= -1;
    } else if (this.osc <= 0) {
      this.speed *= -1;
    }
    //for alpha change
    this.osc1 += this.speed1;
    if (this.osc > 50) {
      this.speed1 *= -1;
    } else if (this.osc1 <= 5) {
      this.speed1 *= -1;
    }
    // this.lifetime--;
  }
  this.show = function() {
    // strokeWeight(1);
    // stroke(this.osc, 100, this.osc / 2, this.osc1);
    //point(this.pos.x, this.pos.y);
    // line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);
    //   this.prev.x = this.pos.x;
    //   this.prev.y = this.pos.y;
    push();
    translate(this.pos.x, this.pos.y);
    rotateY(-0.03 * frameCount);
    fill(255);
    sphere(this.r);
    pop();
    //stroke(this.pos.x % 256, 100, this.pos.y % 256);
    //stroke(osc,100,osc); 
    // push();
    // noFill();
    // fill(this.osc, 100, this.osc / 2);
    // rect(this.pos.x, this.pos.y, 10, 10);
    // pop();
    // push();
    // translate(this.pos.x, this.pos.y)
    // sphere(10);
    // pop()
    // var trail = 10;
    // var trailShrink = 2;
    // trail -= trailShrink;
    // if (trail <= 0) {
    //   trailShrink *= -1;
    // } else if (trail >= 11) {
    //   trailShrink *= -1;
    // }
  }

  this.attracted = function(target) {
      //direction = target - this.pos
      var dir = p5.Vector.sub(target, this.pos);
      //var dsquared = dir.magSq();
      var d = dir.mag();
      // dsquared = constrain(dsquared, 5, 50);
      d = constrain(d, 1, 25);
      var G = 50;
      //var magnitude = G / dsquared;
      var magnitude = G / (d * d);
      dir.setMag(magnitude);
      //repulsion
      if (d < 20) {
        dir.mult(-10);
      }
      this.acc.add(dir);
  }
}