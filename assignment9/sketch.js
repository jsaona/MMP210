function setup() {
    createCanvas(800, 600);

    background("brown");
    stroke(0);
    strokeWeight(3);

    var columnSize = width / 4;
    var rowSize = height / 3;
    for (var x = 50; x <= width; x += columnSize) {
        for (var y = 50; y <= height; y += rowSize) {
           // console.log(x,y)
            //ellipse(x,y,columnSize, rowSize);
            //myWindow(x,y);
            stroke(0,255,0);
            //line(x,0,x,height);
            //line(0,y,width,y);
            noFill();
            ellipse(x,y,10);
            noStroke();
            
            myWindow(x, y, columnSize/4, rowSize/4, columnSize/10);
        }
    }
}

function myWindow(x,y,w,h,m) {
    fill("blue");
    rect(x, y, w, h);
    fill("blue");
    rect(x + w, y + h, w, h);
    fill("skyblue");
    rect(x, y + h, w, h);

    rect(x + w, y, w, h);


    fill("black");
    /*bottom*/
    rect(x - m, y + h*2, m*2 + w*2, m/2);
    /*Top*/
    rect(x - m, y - m/2, w*2 + m*2, m/2);

}