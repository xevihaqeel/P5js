var outerRad = 160;
var innerRad = 200;
var px = 0;
var py = 0;
var angle = 0;
var pts = 36;
var rot = 360.0 / pts;
var fillCol = 255;
var fillFade = fillCol / pts;
var x;
var y;
var osc = 0;
var osc1 = 0;
var oscSpeed = 5;
var speed = 6;
var vid;

function setup() {
  createCanvas(800, 800);
  x = width / 2;
  y = height / 2;
  background(0);
  vid = createVideo(['giphy (29).mp4']);
  vid.hide();
  vid.loop();


}

function draw() {
  osc += oscSpeed;
  if (osc > 255) {
    oscSpeed *= -1;
  } else if (osc <= 0) {
    oscSpeed *= -1;
  }

  outerRad += speed;
  innerRad += speed;
  if (outerRad > width / 2) {
    speed *= -1;
  } else if (innerRad < 100) {
    speed *= -1;
  }
  push();
  rotate(0.03 * frameCount);
  spyro();
  pop();

  //background(osc / 4, osc, osc / 2);

}

function spyro() {
  beginShape(TRIANGLE_STRIP);
  for (var i = 0; i < pts; i++) {
    px = x + cos(radians(angle)) * outerRad;
    py = y + sin(radians(angle)) * outerRad;
    angle += rot;
    vertex(px, py);
    px = x + cos(radians(angle)) * innerRad;
    py = y + sin(radians(angle)) * innerRad;
    vertex(px, py);
    outerRad -= 4;
    innerRad -= 4.25;
    fill(fillCol);
    //texture(vid);
    fillCol -= fillFade;
    angle += rot;
  }
  endShape();
}