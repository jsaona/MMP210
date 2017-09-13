function setup() {
	createCanvas(640, 460);
}
function draw() {
	background("tan");
	fill("white");
    
    //two wheels
	fill("black");
    ellipse(100, 300, 100, 100);
    ellipse(400, 300, 100, 100);
    
    //two square
    fill("blue");
    // front
    rect(20, 150, 450, 100);
    // back
    rect(300, 50, 200, 200);
    
    //rims
    fill("white");
    ellipse(100, 300, 50, 50);
    ellipse(400, 300, 50, 50);
    
    //lights
    fill("yellow");
    ellipse(35, 175, 40, 40);
    ellipse(35, 225, 40, 40);
    
    
   
}