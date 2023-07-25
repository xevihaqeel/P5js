 var boxSize = 40;
 var margin = boxSize * 2;
 var depth = 400;
 var z = 0;
 var boxFill;
 var osc, osc2;
 var speed = 3;
 var speed2 = 20;
 var dSpeed = 4;

 function setup() {
   createCanvas(576, 1024, WEBGL);
   noStroke();
   osc = 0;
   osc2 = 0;

 }

 function draw() {
    makeBox(); 
   //back and forth 
   osc += speed;
   var negSpeed = speed *= 1;
   osc = osc > 256 ? negSpeed : negSpeed;
   // if (osc > 256) {
   //   speed *= -1;
   // } else if (osc <= 0) {
   //   speed *= -1;
   // }
   osc2 += speed2;
   if (osc2 > 256) {
     speed2 *= -1;
   } else if (osc2 <= 0) {
     speed2 *= -1;
   }
   var bg = color(osc / 2, osc / 4, 100);
   // background(bg);
   // background(0, 255, 0);
   background(bg);

   z += dSpeed;
   if (z >= 800) {
     dSpeed *= -1;
   } else if (z <= -800) {
     dSpeed *= -1;
   }

   push();
   translate(0, 0, 0);
   // rotateZ(sin(0.03 * frameCount));
   // rotateZ(0.03 * frameCount);
   cubeGrid();
   pop();

 }
function makeBox(){
  push();
  translate(-mouseX, -mouseY); 
  box(40); 
  pop(); 
}
 function cubeGrid() {

   for (var i = -depth; i < depth; i += boxSize + 10) {
     push();
     for (var j = -height; j < height; j += boxSize + 10) {
       push();
       for (var k = -width; j < width; j += boxSize + 10) {
         push();
         translate(i, j, k);
         //fill(100, osc2 / 2, osc2 / 4, 90);
         // fill(abs(i), abs(j), abs(k), 75);
         fill(i % 256, j % 256, abs(k), 75);
         push();
         rotateY(0.08 * frameCount);
         rotateX(0.08 * frameCount);
         box(boxSize);
         pop();
         pop();
       }
       pop();
     }
     pop();
   }
 
 }