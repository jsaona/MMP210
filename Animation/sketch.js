var x=0;
var speed = 3;

function setup() {
    createCanvas(700, 500);
}

function draw() {
    translate(width/2, height/2);
	rotate(PI*frameCount/50);
    background(0);
    stroke(255);
    strokeWeight(4);
    noFill();
    fill("skyblue");
    
    ellipse(x, 200, 100, 100);
    rect(100, 200, 100, 100);
    
    if (x > width || x < 0) {
       speed = speed * -1;
    }
    x = x + speed;
   
}