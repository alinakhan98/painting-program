var red1 = 10;
var green1 = 0;
var blue1 = 200;



function circle(x, y, diameter){
  ellipse(x, y, diameter, diameter);
}

function setup() {
  createCanvas (640, 480);
}

function draw() {
  noStroke ();
  fill( red1, green1, blue1);
  circle(mouseX, mouseY, 10);

  red1= red1 + 0.5;
  if (red1 > 255) {
  red1= 0;
  }
  blue1= blue1-1;
  if (blue1 <= 0) {
  blue1= 255;
  }
 if (mouseIsPressed) {
   fill (255, 255, 255);
   ellipse(mouseX, mouseY, 100, 100);
   if (mouseIsPressed == false) {
     fill(red1, green1, blue1);
   }
 }
 

}  

