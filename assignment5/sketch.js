/* initialize red green and blue all to zero */
var r = g = b = 0;
function setup() {
	createCanvas(640, 450);
}

function draw() {
	background(r, g, b);
	
	
    fill("Skyblue");
    rect(200,275,175,175);
    ellipse(100,110,175,175);
    ellipse(500,110,175,175);
	/* if mouse is on right half, else left */
	if (mouseX > width/2) {
		r += 2;
	} else {
		r -= 2;
	}
	
	/* if mouse on left half, else right */
	if (mouseX < width/2) {
		g += 1;
	} else {
		g -= 1;
	}
	/* could i combine previous two 
	if/else statments? */

	/* if mouse is on bottom half of canvas
	else top half */
	if (mouseY > height/2) {
		b += 2;
	} else {
		b -= 1;
	}
}