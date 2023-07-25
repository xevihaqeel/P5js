var s = 20;
var x = 0;
var y = 0;
var z = 0;
var speed = 7;

var robot = [];


function setup() {
  createCanvas(800, 800, WEBGL);
  for (var i = 0; i < robot.length; i++) {
    robot.push(new Robot());
  }
}

function draw() {
  background(0);

  for (var i = 0; i < robot.length; i++) {
    robot[i].move();
    robot[i].display();
  }
}