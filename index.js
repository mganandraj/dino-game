import Player from "./Player.js";
// import Ground from "./Ground.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 200;


const PLAYER_WIDTH = 88 / 1.5; //58
const PLAYER_HEIGHT = 94 / 1.5; //62


const GROUND_WIDTH = 2400;
const GROUND_HEIGHT = 24;

//Game Objects
let player = null;
let ground = null;

function createSprites() {
    player = new Player(
        ctx,
        canvas.width / 2 - PLAYER_WIDTH / 2,
        canvas.height - GROUND_HEIGHT - PLAYER_HEIGHT,
        PLAYER_WIDTH,
        PLAYER_HEIGHT
    );
}

function setScreen() {
  canvas.width = GAME_WIDTH;
  canvas.height = GAME_HEIGHT;
  createSprites();
}

setScreen();

//Use setTimeout on Safari mobile rotation otherwise works fine on desktop
window.addEventListener("resize", () => setTimeout(setScreen, 500));

if (screen.orientation) {
  screen.orientation.addEventListener("change", setScreen);
}

function clearScreen() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function gameLoop(currentTime) {

    clearScreen();

    // Update game objects
    player.update();

    //Draw game objects
    player.draw();

  
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);