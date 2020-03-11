angle=0

function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background(0);
  push();
  rotateX(angle)  
  normalMaterial()
  stroke('yellow')
  strokeWeight(3)
  translate(0,-200);
  box(50);
  translate(0,400);
  box(50);
  translate(200,-200);
  box(50);
  translate(-400,0);
  box(50);
  angle+=0.003
  pop();

}