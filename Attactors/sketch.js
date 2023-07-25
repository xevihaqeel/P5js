var attractors = [];
var particles = [];
var x = 0;
var y = 0;
var vid;
var osc1 = 0;

var distances = [50];
var maxDistance;
var spacer;
var osc = 0;


function setup() {

  spacer = 100;
  createCanvas(800, 800, WEBGL);

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


function draw() {

  //background(0);
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
  

  // Blue directional light from the left
  var speed = 0.5;
  osc += speed;
  if (osc >= 1) {
    speed *= -1;
  } else if (osc <= -1) {
    speed *= -1;
  }
  directionalLight(0, 100, 255, -1, 0, 0);
  // Orange point light on the right
  pointLight(150, 100, 0, 300, 0, 600);


  // particles.push(new Particle(random(-width,width), random(-height,height)));
  for (var j = 0; j < attractors.length; j++) {
    var size = 50;
    var grow = 2;
    push();
    translate(attractors[j].x, attractors[j].y);
    //size += grow;
    // texture(vid);
    rotateY(sin(0.05 * frameCount));
    rotateX(0.03 * frameCount);
    rotateZ(0.03 * frameCount);
    //nest(); 
    //box(size);
    torus(size, 10);
    pop();

  }
  for (var i = 0; i < particles.length; i++) {
    var particle = particles[i];
    if (particles[i].lifetime <= 0) {
      particles.splice(i, 1);
    }


    for (var k = 0; k < attractors.length; k++) {
      particle.attracted(attractors[k]);
    }
    particle.update();
    particle.show();
  }
}

function nest() {
  push();
  rotateZ(90);
  cosSin3D();
  pop();
  //#3
  push();
  rotateZ(180);
  cosSin3D();
  pop();
  //#4
  push();
  rotateZ(270);
  cosSin3D();
  pop();
}

function cosSin3D() {

  var x2 = width / 2;
  var y2 = height / 2;
  for (var x = 0; x < x2; x += spacer) {
    push();
    for (var y = 0; y < y2; y += spacer) {
      translate(sin(frameCount * 0.03) * 50, sin(frameCount * 0.03) * 50, cos(frameCount * 0.03) * 50);
      rotateX(frameCount * 0.03);
      push();
      rotateY(cos(0.03 * frameCount));
      //texture(vid);
      //sphere(spacer / 6);
      box(spacer / 4);
      // gridThing();
      pop();
    }
    pop();
  }
}