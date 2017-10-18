var x=200;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background("brown");
    stroke(0);
    strokeWeight(3);
    
  
    fill("blue");
    rect(x, 150, 100, 100);
    fill("blue");
    rect(300, 250, 100, 100);
    fill("skyblue");
    rect(200, 250, 100, 100);
    
    rect(300, 150, 100, 100);
    
    rect(300, 350, 100, 100);
    fill("blue");
    rect(200, 350, 100, 100);
    fill("black");
    /*bottom*/
    rect(190, 450, 220, 15);
    /*Top*/
    rect(190, 135, 220, 15);
    
    
    
   
}