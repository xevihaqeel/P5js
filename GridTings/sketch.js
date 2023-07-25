var distances = [20];
var maxDistance;
var spacer;
var osc = 0;

var vid;

function setup() {
  createCanvas(800, 800, WEBGL);
  //vid = createVideo(["giphy (23).mp4"]);
  // vid.loop();
  // vid.hide();
  // //frameRate(30);
  for (var x = -width; x < width; x++) {
    distances[x] = [20];
    for (var y = -height; y < height; y++) {
      var distance = dist(-width, -height, x, y);
      distances[x][y] = distance;
    }
  }
  spacer = 100;
  //noLoop();  // Run once and stop
}

function draw() {
  background(0);
  //***lights***//
  directionalLight(254, 249, 79, -1, 0, 0);
  directionalLight(254, 100, 100, 0, -1, 0);

  //***lights***//

  push();
  rotateY(0.03 * frameCount);
  //rotateX(cos(0.03 * frameCount));
  //call function
  gridThing();
  pop();
  // cosSin3D();

  //******Sin/Cos translate Practice***//
  // push();
  // rotateY(0.03 * frameCount);
  // cosSin3D();
  // pop();
  //*************************************//
}





function gridThing() {
  osc += 0.083;
  for (var x = -width; x < width; x += spacer) {
    for (var y = -width; y < height; y += spacer) {

      var x2 = width / 2;
      var y2 = height / 2;
      var z = 0;


      //****************************************************//
      //--CUBSETS ON THE RIGHT--//
      //rightside set
      push();
      translate(x2, y);
      rotateY(cos(osc));
      box(spacer / 2);
      pop();

      //rightside set 2
      push();
      translate(x2 - 300, y, z - 300);
      rotateY(-0.083 * frameCount);
      box(spacer / 2);
      pop();
      //rightside set 3
      push();
      translate(x2 - 300, y, z + 300);
      rotateY(-0.083 * frameCount);
      box(spacer / 2);
      pop();
      //****************************************************//

      //****************************************************//
      //--CUBSETS ON THE LEFT--//
      //leftside set
      push();
      translate(-x2, y);
      rotateY(-cos(osc));
      box(spacer / 2);
      pop();
      //leftside2 set
      push();
      translate(-x2 + 300, y, z - 300);
      rotateY(0.083 * frameCount);
      box(spacer / 2);
      pop();


      // //leftside3 set
      push();
      translate(-x2 + 300, y, z + 300);
      rotateY(0.083 * frameCount);
      box(spacer / 2);
      pop();


      // //****************************************************//
      push();
      translate(sin(frameCount * 0.03 + x) * 100, sin(frameCount * 0.03 + y) * 100, x * 0.03);
      box(10);
      pop();

      // //middleset
      // push();
      // translate(0, y);
      // //rotateX(0.05 * frameCount);
      // rotateY(0.05 * frameCount)
      //   //rotateZ(0.05 * frameCount);
      // box(spacer - 5);
      // pop();
      ///******************************************************//
    }
  }
}

function cosSin3D() {

  var x2 = width / 2;
  var y2 = height / 2;
  for (var x = 0; x < width; x += spacer) {
    push();
    for (var y = 0; y < height; y += spacer) {
      translate(sin(frameCount * 0.03 + x2) * 50, sin(frameCount * 0.03 + y2) * 50, cos(frameCount * 0.03 + x2) * 50);
      rotateX(frameCount * 0.03);
      push();
      rotateY(cos(0.03 * frameCount));
      //sphere(spacer / 4);
      //gridThing();
      pop();
    }
    pop();
  }
}