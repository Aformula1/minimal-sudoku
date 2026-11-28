# Minimal Sudoku

A clean, elegant and minimalist Sudoku game designed for a focused puzzle-solving experience.

Minimal Sudoku combines a simple interface with powerful gameplay features, including multiple difficulty levels, daily challenges, hints, statistics and offline support.

**Simple design. Smart gameplay. No distractions.**

## Features

### Sudoku Gameplay

- Classic 9×9 Sudoku board.
- Three-by-three box highlighting.
- Four difficulty levels: Easy, Medium, Hard and Expert.
- Puzzle generation with unique solutions.
- Number input from 1 to 9.
- Notes/Pencil mode.
- Automatic candidate notes.
- Invalid entry detection.
- Mistake counter.
- Puzzle completion detection.

### Game Tools

- Undo and redo.
- Auto Notes toggle that never touches your own notes.
- Smart hints.
- Reset puzzle.
- New Game.
- Optional timer.
- Automatic game saving.
- Keyboard shortcuts:
  - `Ctrl + Z` – Undo.
  - `Ctrl + Y` – Redo.

### Daily Challenge

- A new daily Sudoku challenge.
- Date-based deterministic puzzle generation.
- Daily difficulty rotation.
- Daily completion tracking.
- Current and longest streak tracking.
- Separate saved progress for daily puzzles.

### Statistics

- Total puzzles played.
- Completed puzzles.
- Completion records.
- Average and best times.
- Personal best time for each difficulty.
- Mistakes and hints tracking.
- Daily challenge statistics.

### User Experience

- Minimalist interface.
- Responsive mobile-first design.
- Light and dark themes.
- Classic and Liquid Glass appearance options.
- One-time "What's New" announcement after an update.
- Smooth interactions and animations.
- Bottom navigation.
- Persistent local game progress.

## Technologies

Minimal Sudoku is built using lightweight web technologies:

- HTML5
- CSS3
- Vanilla JavaScript
- LocalStorage
- Progressive Web App (PWA)
- Capacitor for Android

No account system or backend is required.

## Installation

### Use the Website

Open the deployed website in your browser.

On Android:

1. Open the website in Google Chrome.
2. Select **Install App** or **Add to Home Screen**.
3. Confirm installation.

On iPhone:

1. Open the website in Safari.
2. Tap the Share button.
3. Select **Add to Home Screen**.

### Run Locally

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to the website folder:

```bash
cd YOUR_PROJECT_NAME/www
```

Open `index.html` in a browser or use a local development server.

For PWA installation and service worker testing, use localhost or HTTPS.

## Android Build

Minimal Sudoku uses Capacitor for its Android application.

Install dependencies:

```bash
npm install
```

Synchronize the Android project:

```bash
npx cap sync android
```

Build a debug APK:

```bash
cd android
```

On Windows:

```bash
gradlew.bat assembleDebug
```

On macOS or Linux:

```bash
./gradlew assembleDebug
```

The generated APK is located at:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

## Deployment

The web version can be deployed using Vercel.

Recommended configuration:

| Setting          | Value       |
| ---------------- | ----------- |
| Framework Preset | Other       |
| Root Directory   | `www`       |
| Build Command    | Leave empty |
| Output Directory | `.`         |
| Install Command  | Leave empty |

Connect the GitHub repository to Vercel to enable automatic deployments when changes are committed.

## Project Structure

```text
Minimal-Sudoku/
│
├── www/
│   ├── index.html
│   ├── manifest.webmanifest
│   ├── sw.js
│   │
│   └── icons/
│       ├── icon-192.png
│       └── icon-512.png
│
├── android/
│
├── package.json
├── capacitor.config.json
└── README.md
```

## Privacy

- No account registration required.
- No backend required.
- Game progress is stored locally.
- Statistics are stored locally.
- No personal profile is necessary to play.
- No data share or collection.
- No analytics or tracking.

Clearing browser storage may erase locally saved progress.

## Development

Minimal Sudoku is designed to remain lightweight, maintainable and easy to improve.

The project prioritizes:

- Performance.
- Accessibility.
- Responsive design.
- Reliable puzzle generation.
- Consistent gameplay across devices.
- A distraction-free interface.

## Roadmap

Planned improvements may include:

- Additional interface themes.
- Expanded statistics.
- More personalization settings.
- Further mobile experience improvements.

## Version

**Current Version:** 2.2

**Project:** Minimal Sudoku

**Platform:** Web, Android and iOS Safari

---

*Made with care for Sudoku lovers.*
