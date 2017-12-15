function Bird() {
    this.y = height / 2;
    this.x = 64;

    this.gravity = 0.6;
    this.lift = -15;
    this.velocity = 1;

    this.show = function () {
        fill("white");
        ellipse(this.x, this.y, 20, 20 );
    }

    this.up = function () {
        this.velocity += this.lift;
    }

    this.update = function () {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;

        if (this.y < 0 || this.y > height) {
            this.y = 1000;
            this.lift = 0;
            gameOver ();
        }
    }
}
