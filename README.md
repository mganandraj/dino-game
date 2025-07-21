# 🦕 Dino Game

A Chrome Dino Game clone built with HTML5 Canvas and JavaScript.

## 🎮 How to Play

- Press **Spacebar** to jump
- Currently in development - basic player movement implemented

## 🚀 Current Features

- Dino character with running animation (alternates between two sprite images)
- Spacebar jump controls
- Basic HTML5 Canvas setup with game loop
- Responsive canvas that adapts to screen size
- Player sprite rendering and positioning

## 🎯 Live Demo

[View current development state](https://mganandraj.github.io/dino-game/) *(Enable GitHub Pages to activate this link)*

## 🛠️ Technical Details

### Files Structure
- `index.html` - Main HTML file with canvas setup and basic styling
- `index.js` - Game loop, canvas setup, and player initialization
- `Player.js` - Player class with basic movement and sprite animation
- `images/` - Game sprites (dino animations, obstacles, ground)

### Technologies Used
- HTML5 Canvas
- Vanilla JavaScript (ES6+ modules)
- CSS for basic styling

### Current Implementation
- **Player Class**: Handles dino sprite rendering and running animation
- **Game Loop**: Basic requestAnimationFrame loop for continuous rendering
- **Keyboard Input**: Spacebar detection for jump controls
- **Responsive Design**: Canvas resizes on window resize and orientation change

## 🚧 In Development

The following features are planned but not yet implemented:
- Jump physics and landing
- Obstacle generation (cacti)
- Collision detection
- Score system
- Game over state
- Variable jump height

## 🎨 Assets

The game includes sprite images for:
- Dino running animations (`dino_run1.png`, `dino_run2.png`) - *implemented*
- Standing still pose (`standing_still.png`) - *implemented*
- Cactus obstacles (`cactus_1.png`, `cactus_2.png`, `cactus_3.png`) - *not yet implemented*
- Ground texture (`ground.png`) - *not yet implemented*

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

3. Navigate to `http://localhost:8000` to see the current development state

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for any improvements!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Enjoy playing the Dino Game! 🦕🌵
