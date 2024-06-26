# Durak Game Start Screen

Welcome to the Durak Game Start Screen project! This README provides a detailed overview of the code structure, functionality, and setup instructions.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Code Explanation](#code-explanation)
- [How to Play](#how-to-play)

## Overview

The Durak Game Start Screen is the initial interface for a Soviet-themed card game called "Durak". It features a visually striking design with dynamic background elements, glowing neon effects, and animated buttons.

## Features

- Dynamic background video
- Glowing neon star effect
- Hammer and sickle icons with neon glow
- Stylish fonts for text elements
- Animated buttons with hover effects
- Responsive design

## Setup and Installation

### Prerequisites

- Node.js
- npm 

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/durak-start-screen.git
    cd durak-start-screen
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Start the development server:**

    ```sh
    npm start
    ```

4. **Open your browser and navigate to:**

    ```
    http://localhost:3000
    ```


## Code Explanation

### StartScreen Component

The `StartScreen.tsx` file contains the main React component for the start screen. Here's an overview of its structure:

- **Imports**: The component imports necessary dependencies including React, React Router, CSS styles, and media assets (video, icons).
- **Component Setup**: The `StartScreen` component uses React hooks (`useEffect`, `useRef`) to handle side effects and references to HTML elements.
- **Effects**: 
  - `useEffect` is used to add and remove a CSS class for the start screen and control audio playback.
  - The background video playback rate is set to 0.5 for a slow-motion effect.
- **Handlers**: 
  - `handleStartGame` function navigates to the game screen when the "Play" button is clicked.
- **JSX Structure**: 
  - A `<video>` element for the background video.
  - A `highlight-box` for visual emphasis.
  - A `logo-container` containing the neon star SVG.
  - Title text and hammer/sickle icons.
  - A `button-container` with navigation buttons.

### CSS Styling

The `StartScreen.css` file contains the styles for the start screen. Key styles include:

- **Global Styles**: Basic reset and font imports.
- **Layout**: Flexbox is used to center and align elements.
- **Neon Effects**: CSS animations and gradients create the neon glow effects for the star, hammer, and sickle icons.
- **Buttons**: Styles and animations for interactive buttons.

## How to Play

Durak is a traditional Russian card game. Here's a brief overview of the gameplay:

1. **Objective**: The goal is to avoid being the last player with cards.
2. **Players**: The game can be played with 2 or more players.
3. **Deck**: A standard 36-card deck is used.
4. **Gameplay**:
   - Players take turns attacking and defending with cards.
   - The defender must beat the attacking card with a higher card of the same suit or a trump card.
   - If the defender cannot beat all attacking cards, they must pick them up.
   - The turn passes to the next player once all attacking cards are defended or picked up.
5. **Endgame**: The game ends when one player is left with cards. This player is the "Durak" (fool).

For detailed rules, please refer to the official Durak game rules.


---

Enjoy the Durak Game Start Screen! If you have any questions or need further assistance, feel free to reach out.
 
