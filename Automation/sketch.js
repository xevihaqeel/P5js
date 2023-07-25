var zooms = []; 

function setup() {
  createCanvas(800,800,WEBGL); 
}
function keyPressed(){
zooms.push(new Vehicle(random(-width,width),random(-height,height))); 
  
}
function draw() { 
  
  var x = mouseX; 
  var y = mouseY; 
  var target = createVector(x,y); 
  
  for (var i = zooms.length-1; i >=0; i--){
  zooms[i].update(); 
  zooms[i].display(); 
  zooms[i].seek(); 
    
  }
}