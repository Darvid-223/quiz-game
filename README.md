# quiz-game

## Introduction & Overview 

## Website Structure and Development Details

## Features

### Navigation Bar

### Home Page

### Menu Page

### Reserve Page

### Responsive Design

### Social Media Links

### Accessibility Features

##  Testing

### Overview

### Feature Testing

### Browser Compatibility

### Responsiveness

### Validator Testing

### Unfixed Bugs

**Issue Description**

Currently, there is a bug in the quiz application where visual feedback does not consistently work as expected during the gameplay. When a user selects an incorrect answer, the chosen button correctly turns red to indicate a wrong answer; however, the button that represents the correct answer does not always turn green. This issue affects user experience by not providing clear and consistent feedback, which is crucial for learning and game interaction.

**Impact**

This bug can lead to confusion among users as they are not always visually informed of the correct answer after making an incorrect selection. It undermines the educational aspect of the quiz by not reinforcing the correct information through visual cues.


**Issue Description**

Users may experience an issue where no questions or answers are displayed when the game is started quickly after a page refresh or initial load. This intermittent problem appears to be tied to the asynchronous nature of data fetching from the quiz API, where responses may not return quickly enough under certain conditions, such as slow network speeds or high server load.

**Impact**

This bug can significantly affect the user experience by preventing players from immediately starting the game after loading the page, potentially leading to confusion or frustration. It disrupts the smooth and responsive nature of the game interface.

**Current Status**

The issue is currently mitigated by preventing the game from starting if no questions are loaded, ensuring that players are not presented with a blank quiz. Players may simply wait a few seconds and attempt to start the game again, which typically resolves the issue as the API response time improves. This method ensures that no game session starts without data, thus preventing potential confusion or a poor user experience.

### Handling 404 Errors

## Technologies Used

### Tools and Resources

## Deployment

### Github Pages

## Local Development Setup

### Introduction

### Why Visual Studio Code and WSL?

### Prerequisites

### Setting Up the Environment

## Credits & Acknowledgments

### HE Library

This project utilizes the HE library for HTML entity encoding and decoding in JavaScript. The HE library is an open-source parser and encoder that greatly simplifies handling HTML entities in web applications. Its robust functionality helps ensure that all text content fetched from external sources is correctly formatted and displayed in the quiz.

The use of this library enhances the application's functionality by allowing it to accurately process and display questions and answers that include special characters and symbols, providing a seamless and error-free user experience.

### Code Insights and Inspiration

### Content

### Media

### Acknowledgements