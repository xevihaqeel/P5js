var total = 30;
var r;
var ball;
var clock;
var osc = 0;
var osc2 = 0;

var whoa = [];
var vid;


var x1 = 400;
var x2 = 400;
var y1 = 300;
var y2 = 250;
var z1 = 0;
var z2 = 0;
var z3 = 100;
var slow = 0.03;


function preLoad() {
  img = loadImage('');

}

function setup() {
  createCanvas(1000, 1000, WEBGL);
  ball = new Bundle();

  vid = createVideo(['data/PossibleVideoTexture.mp4']);

  vid.loop();
  vid.hide();

  clock = loadModel('data/Brass_and_Marble_Hourglass.obj');

}

function draw() {
  // // Orange point light on the right
  // pointLight(map(sin(osc), 100, 0, 500, 0, 200));

  // Blue directional light from the left
  directionalLight(0, 102, 255, -1, 0, 0);
  // directionalLight(102, 200, 0, 1, 0, 0);

  // // Yellow spotlight from the front
  pointLight(255, 100, 109, 0, 0, 300);

  // background(0, 255, 0);
  background(0);
  r = map(sin(osc), -1, 1, 50, 300);

  osc += 0.08;

  osc2 += 0.03;

  ball.display();
  ball.update();
}

function Bundle() {


  this.display = function() {

    // texture(vid);
    rotateY(sin(-.04 * frameCount / 2));
    rotateX(cos(-.04 * frameCount / 2));
    for (var i = 0; i < total; i++) {
      var lat = map(i, 0, total, -PI, PI);
      for (var j = 0; j < total; j++) {
        var lon = map(j, 0, total, -PI, PI);
        this.x = r * sin(lon) * cos(lat);
        this.y = r * sin(lon) * sin(lat);
        this.z = r * cos(lat);
        push();
        translate(this.x, this.y, this.z);
        rotateY(-0.03 * frameCount);
        rotateX(0.03 * frameCount);
        box(20);

        pop();
      }
    }
  }
  this.update = function() {

  }
}