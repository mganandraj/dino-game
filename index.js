import Player from "./Player.js";
import Ground from "./Ground.js";
import CactiController from "./CactiController.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 400;

const PLAYER_WIDTH = 60;
const PLAYER_HEIGHT = 60;

const GROUND_WIDTH = 2400;
const GROUND_HEIGHT = 24;

const CACTI_CONFIG = [
  { width: 48, height: 100, image: "images/cactus_1.png" },
  { width: 98, height: 100, image: "images/cactus_2.png" },
  { width: 68, height: 70, image: "images/cactus_3.png" },
];

let player = null;
let ground = null;
let cactiController = null;

let gameOver = false;

function createSprites() {
    player = new Player(
        ctx,
        PLAYER_WIDTH,
        PLAYER_HEIGHT,
        GAME_HEIGHT/2,
        GAME_HEIGHT);

    ground = new Ground(
        ctx,
        GROUND_WIDTH,
        GROUND_HEIGHT
    );

    const cactiImages = CACTI_CONFIG.map((cactus) => {
      const image = new Image();
      image.src = cactus.image;
      return {
        image: image,
        width: cactus.width,
        height: cactus.height,
      };
    });

    cactiController = new CactiController(
        ctx,
        cactiImages
    );
}

function setScreen() {
  canvas.width = GAME_WIDTH;
  canvas.height = GAME_HEIGHT;
  createSprites();
}

setScreen();

function clearScreen() {
  ctx.fillStyle = "yellow";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function showGameOver() {
  const fontSize = 70;
  ctx.font = `${fontSize}px Verdana`;
  ctx.fillStyle = "grey";
  const x = canvas.width / 4.5;
  const y = canvas.height / 2;
  ctx.fillText("GAME OVER", x, y);
}

function gameLoop() {

    console.log("Game loop running");

    clearScreen();

    // Update game objects
    player.update();
    ground.update();
    cactiController.update();

    if (cactiController.collideWith(player)) {
      gameOver = true;
    }

    //Draw game objects
    player.draw();
    ground.draw();
    cactiController.draw();

    if (gameOver) {
      showGameOver();;
      return;
    }

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
