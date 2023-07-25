var boxes = [];
var slow = .003;
var x = 0;
var y = 0;
var y2 = 400;
var vid;

function preload() {
  tex = loadImage("The-Coven.jpg");

}


function setup() {
  createCanvas(800, 800, WEBGL);
  // cursor(CROSS);
}


function draw() {
  background(0);

  // var locY = (mouseY / height - 0.5) * (-2);
  // var locX = (mouseX / width - 0.5) * 2;
  // pointLight(250, 250, 250, locX, locY, 0);

  for (var i = boxes.length - 1; i >= 0; i--) {
    boxes[i].update();
    boxes[i].display();
    if (boxes[i].lifetime < 0) {
      boxes.splice(i, 1);
    }
  }
  push();
  translate(0, -300);
  rotateY(mouseY * 0.04);
  rotateX(-0.04 * frameCount);
  texture(tex);
  torus(40, 40);
  pop();



  push();
  translate(x, y2--)
  if (y2 <= -400) {
    y2 = 400;
  }
  rotateY(frameCount * 0.04);
  rotateX(-0.04 * frameCount);
  texture(tex);
  sphere(50);
  pop();
  boxes.push(new Cubes(0, 400, random(-200, 200)));
  // boxes.push(new Cubes(400, 0, random(-200, 200)));
  // boxes.push(new Cubes(-400, 0, random(-200, 200)));

}




