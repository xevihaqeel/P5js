var vid;
var z = 0;
var osc = 0;
var zSpeed = 3;
var oscSpeed = 5;


function setup() {
  createCanvas(800, 800, WEBGL);
  vid = createVideo(["GummyBears.mp4"]);
  vid.hide();
  vid.loop();


}

function draw() {


  if (osc >= 255) {
    oscSpeed *= -1;
  } else if (osc <= 0) {
    oscSpeed *= -1;
  }
  if (z >= 400) {
    zSpeed *= -1;
  } else if (z <= 0) {
    zSpeed *= -1;
  }
  texture(vid);
  background(osc);
  push();
  if (keyIsPressed) {
    z += zSpeed;
    osc += oscSpeed;
    rotateY(sin(0.03 * frameCount));
    rotateZ(0.02 * frameCount);
    rotateX(0.03 * frameCount);
  }
  translate(0, 0, z);
  box(200);
  pop();

}