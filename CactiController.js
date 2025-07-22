import Cactus from "./Cactus.js";

export default class CactiController {

    cacti = [];
    constructor(ctx, cactiImages) {
        this.ctx = ctx;
        this.canvas = ctx.canvas;
        this.cactiImages = cactiImages;
        
        setTimeout(() => {
            this.spawnCactus();
        }, 2000);
    }

    spawnCactus() {
        const randomIndex = Math.floor(Math.random() * this.cactiImages.length);
        const cactusImage = this.cactiImages[randomIndex];
        const x = this.canvas.width * 1.5;
        const y = this.canvas.height - cactusImage.height;
        const cactus = new Cactus(this.ctx, x, y, cactusImage.width, cactusImage.height, cactusImage.image);
        this.cacti.push(cactus);

        setTimeout(() => {
            this.spawnCactus();
        }, 2000);
    }

    update() {
        this.cacti.forEach((cactus) => {
            cactus.update();
        });

        this.cacti = this.cacti.filter((cactus) => cactus.x > -cactus.width);
    }

    draw() {
        this.cacti.forEach(cactus => {
            cactus.draw();
        });
    }

    collideWith(sprite) {
        return this.cacti.some((cactus) => cactus.collideWith(sprite));
    }

    reset() {
        this.cacti = [];
    }
}