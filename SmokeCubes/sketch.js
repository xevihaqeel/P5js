var boxes = [];
var bubbles = [];
var cones = [];
var hourglass = [];

var timePiece;

var backgroundBoxes = [];
var backgroundSpheres = [];

var lifetime = 300;
var slow = .003;
var x, y;
var y2 = 400;

var vid;


function preload() {

  timePiece = loadModel('data/Brass_and_Marble_Hourglass.obj');
}


function setup() {
  createCanvas(800, 800, WEBGL);
  noCursor();
  // vid = createVideo(["data/giphy (11).mp4"]);
  //vid.loop();
  //vid.hide();

  // vid = createVideo(["data/giphy (21).mp4"]);
  // vid.loop();
  // vid.hide();
  x = 0;
  y = 0;

}

// function mouseClicked() {
//   hourglass.push(new Hourglass(mouseX - 400, mouseY - 400));
// }

function draw() {
  background(0, 255, 0);
  // if (keyIsPressed) {
  //   background(255);

  // } else {
  //   background(0);
  // }

  // if (x > width) {
  //   x = -width;
  // } else {
  //   x += 2;
  // }
  //texture(vid);
 // push();
  // translate(x, y, 0);
  // rotateY(0.04 * frameCount);
  // //rotateX(cos(0.04 * frameCount));
  // scale(15, 15, 15);
  // model(timePiece);
  // pop();



  //var locY = (mouseY / height - 0.5) * (-2);
  //var locX = (mouseX / width - 0.5) * 2;
  //pointLight(250, 250, 250, 0, 0, 0);


  for (var i = boxes.length - 1; i >= 0; i--) {
    boxes[i].update();
    boxes[i].display();
    if (boxes[i].lifetime < 0) {
      boxes.splice(i, 1);
    }
  }
  for (var j = bubbles.length - 1; j >= 0; j--) {
    bubbles[j].update();
    bubbles[j].display();
    if (bubbles[j].lifetime < 0) {
      bubbles.splice(j, 1);
    }
  }

  for (var k = cones.length - 1; k >= 0; k--) {
    cones[k].update();
    cones[k].display();
    if (cones[k].lifetime < 0) {
      cones.splice(k, 1);
    }
  }

  // for (var n = hourglass.length - 1; n >= 0; n--) {
  //   hourglass[n].update();
  //   hourglass[n].display();
  //   if (hourglass[n].lifetime < 0) {
  //     hourglass.splice(n, 1);
  //   }
  // }



  // for (l = backgroundBoxes.length - 1; l >= 0; l--) {
  //   backgroundBoxes[l].display();
  //   backgroundBoxes[l].update();

  //   //splice based on position
  //   if (backgroundBoxes[l].y > height) {
  //     backgroundBoxes.splice(l, 1);
  //   }
  // }

  // for (m = backgroundSpheres.length - 1; m >= 0; m--) {
  //   backgroundSpheres[m].display();
  //   backgroundSpheres[m].update();

  //   //splice based on position
  //   if (backgroundSpheres[m].y > height) {
  //     backgroundSpheres.splice(m, 1);
  //   }
  // }
  // backgroundBoxes.push(new Cubes(random(-width, width), random(-height, height)));
  // backgroundSpheres.push(new Spheres(random(-width, width), random(-height, height)));


  //***FOR CHANGING SPEWING***//

  if (keyIsPressed) {
    boxes.push(new Cubes(mouseX - 400, mouseY - 400));
  } else if (mouseIsPressed) {
    bubbles.push(new Spheres(mouseX - 400, mouseY - 400));
  } else {
    cones.push(new Cones(mouseX - 400, mouseY - 400));
    //hourglass.push(new Hourglass(mouseX - 400, mouseY - 400));

  }

}