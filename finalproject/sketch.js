var bird;
var pipes = [];
var button;
var bg;
var y = 0;
var pixelfont;
var jump;
var pipeImg;
var pipe1;


function preload(){
    bg = loadImage("images/bg.jpg");
    pixelfont = loadFont ('Minecraft.ttf');
    jump = loadSound ('jumpsound.mp3');
    pipeImg = loadImage("images/greenpipe.png");
    pipe1 = loadImage("images/greenpipe1.png");
}

function gameOver() {
    
    button.position(width / 2, height / 2);
    fill('black');
//    fill('black');
    rect(0, 0, width, height);
//    fill('white');
    
    textFont(pixelfont);
    textSize(75);
    fill('white');
    text("Game over", 20, 150);
}

function setup() {
    createCanvas(450, 600);
    bird = new Bird();
    pipes.push(new Pipe());
    button = createButton('Try again');
    button.position(-100, -100);
    fill('#ED225D');
    
}

function draw() {
            

    image(bg, 0, 0);
    for (var i = pipes.length - 1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].hits(bird)) {

            bird.y = height;
            bird.lift = 0;

            gameOver();
        }

        if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
        }
    }
    bird.update();
    bird.show();

    if (frameCount % 100 == 0) {
        pipes.push(new Pipe());
    }

//    image(pipeImg, 0, 0);
}

function keyPressed() {
    if (key == ' ') {
        bird.up();
        jump.play();
        //console.log("SPACE");

    }
}
