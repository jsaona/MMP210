function setup() {
    createCanvas(700, 600);
}

function draw() {
    background(80, 180, 205);
    stroke(0);
    strokeWeight(3);
    
    var columnSize = width/6;
	var rowSize = height/6;
	for (var x = 50; x <= width; x += columnSize) {
		for (var y = 50; y <= height; y += rowSize) {
			
            fill("yellow");
            ellipse(x, y, 50, 50);
            
		}
	} 
}
        