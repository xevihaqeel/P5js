var flowers = [];
var flower;
var yspeed;
var osc = 10;
var grow = 0;
var vid;
var disappear = 500;

var dude;

function preload() {
  teapot = loadModel('assets/Bigger.obj');
  dude = loadModel('assets/3d-model.obj');
  vid = createVideo(['CirclPacking_CirclesOnly_ 4_5_2017 11_31_53 PM.mp4']);
  vid.play();
  vid.hide();
  vid.loop();
}

function setup() {
  createCanvas(800, 800, WEBGL);

  flower = loadModel('assets/3d-model.obj');

  for (var i = 0; i < 100; i++) {
    flowers.push(new Flower());
  }
}




function draw() {
  background(226, 170, 155);
  ambientLight(255, 255, 255, 50); // Orange point light on the right
  //pointLight(map(sin(osc), 100, 0, 500, 0, 200));

  // // Blue directional light from the left
  // directionalLight(0, 102, 255, -1, 0, 0);

  // // Yellow spotlight from the front
  // pointLight(255, 100, 109, 0, 0, 300);

  // disappear--; 
  for (var i = 0; i < flowers.length; i++) {
    flowers[i].update();
    flowers[i].display();
  }
}

function Flower() {
  //  texture(vid);
  ambientMaterial(206, 168, 137);
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(0, 20);

  this.display = function() {
    grow += 0.01;


    // fill(255);
    push();
    translate(this.x, this.y, this.z);
    rotateY((sin(osc) * 0.04) * frameCount);
    // rotateX((cos(osc) * 0.04) * frameCount);
    //rotateZ(0.02 * frameCount);
    scale(50, 50, 50);
    model(dude);
    //texture(vid);
    pop();
  }
  this.update = function() {
    this.y += random(4, 7);

    if (this.y > height) {
      this.y = -height
    }

  }
}