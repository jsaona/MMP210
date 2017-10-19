function setup() {
    createCanvas(800, 600);
}

function draw() {
    background("brown");
    stroke(0);
    strokeWeight(3);
    
    var columnSize = width/4;
	var rowSize = height/3;
	for (var x = 50; x <= width; x += columnSize) {
		for (var y = 50; y <= height; y += rowSize) {
			
            fill("blue");
            rect(x, y, 50, 50);
            fill("blue");
            rect(x + 50, y + 50, 50, 50);
            fill("skyblue");
            rect(x, y + 50, 50, 50);

            rect(x+50, y, 50, 50);


            fill("black");
            /*bottom*/
            rect(x-10, y+100, 120, 7);
            /*Top*/
            rect(x-10, y, 120, 7); 
			
		}
	}
    
}