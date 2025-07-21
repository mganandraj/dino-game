# 🦕 Dino Game

A Chrome Dino Game clone built with HTML5 Canvas and JavaScript.

## 🎮 How to Play

- Press **Spacebar** to jump over obstacles
- Avoid hitting the cacti to keep running
- The longer you survive, the higher your score!

## 🚀 Features

- Smooth running animation with sprite switching
- Variable jump height (tap vs hold spacebar)
- Collision detection
- Responsive canvas-based graphics

## 🎯 Live Demo

[Play the game here](https://mganandraj.github.io/dino-game/) *(Enable GitHub Pages to activate this link)*

## 🛠️ Technical Details

### Files Structure
- `index.html` - Main HTML file with canvas setup
- `index.js` - Game logic, rendering, and game loop
- `Player.js` - Player class handling movement, jumping, and animations
- `images/` - Game sprites and assets

### Technologies Used
- HTML5 Canvas
- Vanilla JavaScript (ES6+ modules)
- CSS for styling

## 🎨 Assets

The game includes various sprite images:
- Dino running animations (`dino_run1.png`, `dino_run2.png`)
- Standing still pose (`standing_still.png`)
- Cactus obstacles (`cactus_1.png`, `cactus_2.png`, `cactus_3.png`)
- Ground texture (`ground.png`)

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

3. Navigate to `http://localhost:8000` to play the game

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for any improvements!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Enjoy playing the Dino Game! 🦕🌵
