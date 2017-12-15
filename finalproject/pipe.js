function Pipe() {
    this.top = random(height / 2);
    this.bottom = random(height / 2);
    this.x = width;
    this.w = 80;
    this.speed = 2;

    this.highlight = false;


    this.hits = function (bird) {
        if (bird.y < this.top || bird.y > height - this.bottom) {
            if (bird.x > this.x && bird.x < this.x + this.w) {
                this.highlight = true;
                this.speed = 0;
                return true;
            }
        }

        this.highlight = false;
        return false;
    }

    this.show = function () {
        fill("green");
        if (this.highlight) {
            fill(255, 0, 0);
        }
        image(pipe1, this.x - this.w, 0, this.w + 150, this.top+10);

        image(pipeImg, this.x -50, height - this.bottom, this.w + 120, this.bottom+10);
        
        
        
    }

    this.update = function () {
        this.x -= this.speed;
    }
    this.offscreen = function () {
        if (this.x < -this.w) {
            return true;
        } else {
            return false;
        }

    }
}
