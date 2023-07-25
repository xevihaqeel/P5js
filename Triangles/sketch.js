//draw multiple triangles
//have them fill with mouse pressed
varx = 0; 
vary = 0; 
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(255);
  var d = dist(mouseX, mouseY, width/2, height/2);
  for ( var i = 0; i < 10; i++) {
    for ( var j = 0; j < 10; j++) {
      strokeWeight(map(d, 0, width, 1, width/4));
      stroke(map(i, 0, 20, 0, 255), map(j, 0, 20, 0, 255), d);

      if (mouseIsPressed) {
        fill(random(255), random(255), random(255));
        line(800, 800, map(i, 0, 10, 0, 800), map(j, 0, 10, 0, 800)); 
        line(0, 0, map(i, 0, 10, 0, 800), map(j, 0, 10, 0, 800));
        line(800, 0, map(i, 0, 10, 0, 800), map(j, 0, 10, 0, 800));
        line(0, 800, map(i, 0, 10, 0, 800), map(j, 0, 10, 0, 800));

        //ellipse(i, j, /*map(i,0,10,50,800), map(j,0,10,50,800)*/map(d,0,10,0,800*2),map(d,0,10,0,800*2)); 
        //ellipse(400,map(d,0,10,0,20), 400,map(d,0,10,0,20));
      } else {
        fill(random(255), random(255), random(255));
        triangle(800*2, 800*2, map(i, 0, 10, 50, 800), map(j, 0, 10, 50, 800), map(d, 0, 10, 50, 800*2), map(d, 0, 10, 50, 800*2));
      }  
      //triangle(x1, y1, x2, y2, x3, y3)
    }
  }
}