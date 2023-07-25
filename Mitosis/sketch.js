var cells = [];

function setup() {
  createCanvas(800, 800, WEBGL);
  cells.push(new Cell(0,0)); 
}

function draw() {
  	//directionalLight(204, 204, 204, -width, 100, 1);

  background(0);
  for (var i = 0; i < cells.length; i++){
  cells.move();
  cells.display();
  }

}