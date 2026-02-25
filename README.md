# Tasbih Counter

A digital Islamic prayer counter (Tasbih/Dhikr counter) web application with timer functionality and theme customization.

## Features

- **Digital Counter**: Click to increment the counter with visual feedback
- **Timer**: Automatic timer starts when counting begins
- **Pause/Resume**: Pause and resume the timer without losing progress
- **Stop**: Stop the timer and reset it to zero
- **Reset**: Reset both counter and timer to initial state
- **Local Storage**: Counter value persists across browser sessions
- **Responsive Design**: Works on mobile, tablet, and desktop devices
- **Theme Support**: Multiple visual themes available

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- LocalStorage API

## File Structure

```
Tasbih-Counter/
├── index.html      # Main HTML structure
├── style.css       # Styling and responsive design
├── app.js          # Application logic
├── tasbih.jpg      # Background image for card
├── theme1.jpg      # Theme option 1
└── theme2.jpg      # Theme option 2
```

## How It Works

### Counter Functionality
- Click the circular button to increment the counter
- Counter displays with 3-digit padding (e.g., 001, 002, 099)
- Counter value is saved to localStorage

### Timer System
- Timer starts automatically on first count
- Displays in HH:MM:SS format
- **Pause Button (Ⅱ)**: Pause/resume timer
- **Stop Button**: Stops timer and resets to 00:00:00
- **Reset Button (↺)**: Resets both timer and counter

### Controls
- **Count Button**: Large circular button for incrementing
- **Reset (↺)**: Clears counter and timer
- **Stop**: Stops and resets timer only
- **Pause (Ⅱ)**: Toggles pause/resume

## Installation

1. Clone or download the repository
2. Open `index.html` in a web browser
3. No build process or dependencies required

```bash
# Clone the repository
git clone <repository-url>

# Navigate to directory
cd Tasbih-Counter

# Open in browser
open index.html
```

## Usage

1. **Start Counting**: Click the circular button to begin
2. **Pause**: Click the pause button (Ⅱ) to pause the timer
3. **Stop**: Click "Stop" to reset the timer while keeping the count
4. **Reset**: Click the reset button (↺) to clear everything
5. **Themes**: Click on theme options to change the visual appearance

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Any modern browser with JavaScript enabled

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

## Future Enhancements

- Theme switching functionality implementation
- Sound notifications at specific counts
- Multiple dhikr phrases selection
- Count history and statistics
- Export count data
- Dark mode support

## License

This project is open source and available for personal and educational use.

## Author

Created as a spiritual tool for Muslims to keep track of their daily dhikr and prayers.
