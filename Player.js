export default class Player {
    dinoRunImages = [];

    jumpPressed = false;
    jumpInProgress = false;
    falling = false;
    JUMP_SPEED = 0.6;

    constructor(ctx, width, height, minJumpHeight, maxJumpHeight) {
        this.ctx = ctx;
        this.canvas = ctx.canvas;
        this.width = width;
        this.height = height; 
        this.minJumpHeight = minJumpHeight;
        this.maxJumpHeight = maxJumpHeight;

        this.x = 10;
        this.y = this.canvas.height - this.height;
        this.yStandingPosition = this.y;

        this.standingStillImage = new Image();
        this.standingStillImage.src = "images/standing_still.png";
        this.image = this.standingStillImage;

        const dinoRunImage1 = new Image();
        dinoRunImage1.src = "images/dino_run1.png";

        const dinoRunImage2 = new Image();
        dinoRunImage2.src = "images/dino_run2.png";

        this.dinoRunImages.push(dinoRunImage1);
        this.dinoRunImages.push(dinoRunImage2);

        // keyboard
        window.removeEventListener("keydown", this.keydown);
        window.removeEventListener("keyup", this.keyup);

        window.addEventListener("keydown", this.keydown);
        window.addEventListener("keyup", this.keyup);
    }

    keydown = (event) => {
        if (event.code === "Space") {
            this.jumpPressed = true;
        }
    };

    keyup = (event) => {
        if (event.code === "Space") {
            this.jumpPressed = false;
        }
    };

    update() {
        this.run();
        this.jump();
    }

    run() {
        if (this.image === this.dinoRunImages[0]) {
            this.image = this.dinoRunImages[1];
        } else {
            this.image = this.dinoRunImages[0];
        }
    }

    jump() {
        if (this.jumpPressed) {
            this.jumpInProgress =  true;
        }

        if (this.jumpInProgress && !this.falling) {
            if (
                this.y > this.canvas.height - this.minJumpHeight ||
                (this.y > this.canvas.height - this.maxJumpHeight && this.jumpPressed)
            ) {
                // this.y -= this.JUMP_SPEED; // * frameTimeDelta * this.scaleRatio;
                this.y -= 10;
            } else {
                this.falling = true; 
            }
        }
        else {
            if (this.y < this.yStandingPosition) {
                this.y += 10; // this.GRAVITY * frameTimeDelta * this.scaleRatio;
                if (this.y + this.height > this.canvas.height) {
                this.y = this.yStandingPosition;
                }
            } else {
                this.falling = false;
                this.jumpInProgress = false;
            }
        }
    }

    draw() {
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}