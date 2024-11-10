# AQA Engineer Test Assessment - Playlist App

This repository contains automated UI tests for a simple Playlist App. The app includes features like searching, adding tracks, and creating custom playlists. This test assessment demonstrates the ability to write functional UI tests for key functionalities of the app.

The app is available at: [Playlist App](https://vite-react-alpha-lemon.vercel.app/)

## Installation

1. **Testing Framework:** Playwright. Install Playwright by running:
  ```bash
  npm install @playwright/test
  ```
2.
   Install Playwright browsers:
 ```bash
 npx playwright install
 ```
## Running Tests

To run tests, use the following commands:

   - To run all tests in headless mode:
   ```bash
   npx playwright test
   ```
   - To run tests with a UI (for debugging):
   ```bash
   npx playwright test --headed
   ```
## Test Cases to Implement
1. Search Functionality
Verify that the search input field filters the available tracks.
Ensure that when a user types a track name in the search box, only matching tracks are displayed.
2. Add Track Using "+" Button
Verify that clicking the "+" button next to a track adds it to the “Your Playlist” list.
3. Add Multiple Tracks
Verify that users can select multiple tracks using checkboxes and click the "Add {N} Tracks" button to add the selected tracks to the playlist.