var hey = [];
var listen = [];
var vid;
var total = 30;
var r;
var ball = [];
var osc = 0;
var osc2 = 0;
var osc3 = 0;

function setup() {
  createCanvas(800, 800, WEBGL);
  for (var i = 0; i < 60; i++) {
    hey.push(new Navi());
  }
  for (var j = 0; j < 60; j++) {
    listen.push(new Tingle());
  }

  ball = new Bundle();
  // ball.push(new Bundle());
  // ball[k] = new Bundle();
  vid = createVideo(["Jacking Off - The Eric Andre Show - Adult Swim.mp4"]);
  vid.loop();
  vid.hide();
  noCursor();
}


function draw() {
  background(0);

  //forsupershapechange

  //radius of the supershape
  r = map(sin(osc), -1, 1, 0, 260);
  //rates of change in size, rotation, etc. 
  osc += 0.03;
  osc2 += 0.03;

  for (var i = 0; i < hey.length; i++) {
    hey[i].display();
    hey[i].update();
  }
  for (var j = 0; j < listen.length; j++) {
    listen[j].display();
    listen[j].update();
  }
  // for (var k = 0; k < ball.length; k++) {
  //   ball[k].display();

  // }
  ball.display();
  ball.update();



}

//----objects
//---spheres
function Navi() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(-400, 400);
  this.s = random(30, 50);
  this.display = function() {
    // ellipse(this.x, this.y, this.s, this.s);
    push();
    texture(vid);
    translate(this.x, this.y, this.z);
    rotateY(map(noise(osc), -1, 1, 0, 20));
    sphere(this.s);
    pop();
  };

  this.update = function() {
    this.x = this.x += noise(-1, 2);
    if (this.x > width) {
      this.x = -width;
    }
  }
}


//boxes
function Tingle() {
  this.change = 0;

  this.x = random(-width, width);
  this.y = random(-height, width);
  this.s = map(noise(this.change), -1, 1, 40, 60);

  this.display = function() {
    // rect(this.x, this.y, this.s, this.s);
    push();
    translate(this.x, this.y);
    box(this.s);
    pop();
  };
  this.update = function() {
    this.change += 0.5;
    this.x = this.x -= noise(-1, 2);
    if (this.x < -width) {
      this.x = width;
    }
  }

}

//supershapes
function Bundle(x, y) {

  this.s = 60;
  this.display = function() {
    rotateY(-.01 * frameCount / 2);
    rotateX(.01 * frameCount / 2);
    for (var i = 0; i < total; i++) {
      var lat = map(i, 0, total, -HALF_PI, HALF_PI);
      for (var j = 0; j < total; j++) {
        var lon = map(j, 0, total, -PI, PI);
        this.x = (r * sin(lon) * cos(lat)) * (osc / 2)
        this.y = (r * sin(lon) * sin(lat)) * (osc / 4);
        this.z = (r * cos(lon)) * (osc / PI);
        push();
        translate(this.x, this.y, this.z);
        rotateY(-0.03 * frameCount / 2);
        rotateX(0.03 * frameCount / 2);
        box(this.s);
        pop();
      }
    }
  }
  this.update = function() {}
}