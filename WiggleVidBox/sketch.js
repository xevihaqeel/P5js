var yoff = 500;
var xoff = 0;
var zoff = 0;

var soff = 0.02;
var rotoff = 0.02;

var vid;
var vid1;
var vid2;
var vid3;

var degx = 0;
var degy = 0;
var degz = 0;

var bg;
var frameCounter = 322;


function setup() {
  frameRate(30);
  createCanvas(1280, 960, WEBGL);
  vid = createVideo(["MVI_8688_2_.mp4"]);
  vid.loop();
  vid.hide();

}

function draw() {
  background(0);
  noCursor();

  var x = map(noise(xoff), 0, 1, -width, width);
  var y = map(noise(yoff), 0, 1, -height, height);
  var z = map(noise(zoff), 0, 1, -width, width);
  var x2 = 0;
  var y2 = 0;
  var z2 = 0;

  yoff += 0.01;
  xoff += 0.01;
  zoff += 0.01;
  soff += 0.03;
  rotoff += 0.03;
  var s = map(noise(soff), 0, 1, 1, 90);
  var s1 = second();

  push();
  translate(x2, y2 - 300);
  //rotateX(cos(-degx));
  rotateY(cos(-degy));
  //rotateZ(cos(-degz));
  texture(vid);
  box(100);
  pop();

  push();
  translate(x2, y2 + 300);
  // rotateX(cos(-degx));
  rotateY(cos(-degy));
  // rotateZ(cos(-degz));
  box(100);
  pop();

  push();
  translate(x2 - 300, y2 - 300, z2 + 300);
  rotateY(180);
  sphere(100);
  pop();

  push();
  translate(x2 - 300, y2 + 300, z2 + 300);
  rotateY(180);
  sphere(100);
  pop();

  push();
  translate(x2 + 300, y2 - 300, z2 + 300);
  rotateY(180);
  sphere(100);
  pop();

  push();
  translate(x2 + 300, y2 + 300, z2 + 300);
  rotateY(180);
  sphere(100);
  pop();

  push();
  translate(x2 - 400, y2, z2);
  rotateY(-90);
  rotateZ(-45);
  cone(100);
  pop();

  push();
  translate(x2 + 400, y2, z2);
  rotateY(90);
  rotateZ(45);
  cone(100);
  pop();



  push();
  // translate(-x, -y, z);
  //texture(vid2);
  //box(250);
  pop();

  push();
  degx += 0.083;
  degy += 0.083;
  degz += 0.083;
  translate(x2, y2, z2 - 700);
  rotateX(45);
  rotateZ(0);
  rotateY(0);

  //rotateX(cos(degx));
  rotateY(cos(degy));
  rotateZ(cos(degz));
  box(600);
  pop();
  // print(cos(degx));
  // print(cos(degy));
  // print(cos(degz));

  // if (mouseIsPressed) {
  //   if (mouseButton == LEFT) {
  //     degx += 0.03;
  //   } else if (mouseButton == RIGHT) {
  //     degy += 0.03;
  //   }
  // }
  // if (keyIsPressed) {
  //   if (keyCode == 'SPACE') {
  //     degz += 0.03;
  //   }
  // }

  // rotateZ(degz);





}