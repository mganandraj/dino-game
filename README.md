# 🦕 Dino Game

A fully playable Chrome Dino Game clone built with HTML5 Canvas and JavaScript.

## 🎮 How to Play

- Press **Spacebar** to jump over cacti obstacles
- Avoid hitting the cacti to keep running
- Try to survive as long as possible!

## 🚀 Features

- ✅ Dino character with smooth running animation
- ✅ Spacebar jump controls with physics
- ✅ Multiple cactus obstacles with random spawning
- ✅ Scrolling ground background
- ✅ Collision detection system
- ✅ Game over state with restart capability
- ✅ Responsive canvas design

## 🎯 Live Demo

[Play the game here!](https://mganandraj.github.io/dino-game/) *(Enable GitHub Pages to activate this link)*

## 🛠️ Technical Details

### Files Structure
- `index.html` - Main HTML file with canvas setup and styling
- `index.js` - Game loop, main game logic, and component initialization
- `Player.js` - Player class with movement, jumping, and sprite animation
- `Ground.js` - Scrolling ground background implementation
- `Cactus.js` - Individual cactus obstacle with collision detection
- `CactiController.js` - Manages cactus spawning and lifecycle
- `images/` - Game sprites and assets

### Technologies Used
- HTML5 Canvas for rendering
- Vanilla JavaScript (ES6+ modules)
- CSS for responsive design
- Object-oriented programming structure

### Game Architecture
- **Component System**: Separate classes for Player, Ground, Cactus, and CactiController
- **Game Loop**: requestAnimationFrame for smooth 60fps animation
- **Collision System**: Precise collision detection between player and obstacles
- **Event System**: Keyboard input handling for jump controls
- **Responsive Design**: Canvas auto-adjusts to screen size and orientation

## 🎨 Assets

The game includes all necessary sprite images:
- ✅ Dino running animations (`dino_run1.png`, `dino_run2.png`)
- ✅ Standing still pose (`standing_still.png`)
- ✅ Multiple cactus obstacles (`cactus_1.png`, `cactus_2.png`, `cactus_3.png`)
- ✅ Scrolling ground texture (`ground.png`)

## 🚀 Setup & Development

1. Clone the repository:
   ```bash
   git clone https://github.com/mganandraj/dino-game.git
   cd dino-game
   ```

2. Open `index.html` in your browser or serve it locally:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

3. Navigate to `http://localhost:8000` to play the game!

## 🎮 Game Mechanics

- **Jump Physics**: Variable jump height based on spacebar hold duration
- **Obstacle Spawning**: Random cactus generation with increasing difficulty
- **Collision Detection**: Precise hitbox detection with visual feedback
- **Endless Gameplay**: Continuous scrolling world with increasing challenge
- **Game Over**: Clear game over state with visual indication

## 🚧 Future Enhancements

Potential features for future development:
- Score tracking and high score system
- Increasing game speed over time
- Sound effects and background music
- Different obstacle types
- Day/night cycle visual themes
- Mobile touch controls

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for any improvements!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Enjoy playing the Dino Game! 🦕🌵
