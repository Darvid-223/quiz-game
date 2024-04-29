# quiz-game

## Introduction & Overview 

Quiz-Game is a dynamic web application designed to offer a fun and interactive way to test general knowledge across various categories. This project aims to demonstrate the practical application of JavaScript, HTML, and CSS by creating a responsive and engaging user experience. The game targets quiz enthusiasts and learners who seek to test their knowledge in different domains such as geography, science, history, and more. It's designed to be intuitive and accessible, ensuring users of all ages can easily navigate and enjoy the game.

The quiz game is fully responsive, making it available on a variety of devices, ensuring a seamless experience whether on a desktop, tablet, or smartphone. The game progresses through a series of questions, each with multiple-choice answers, and provides immediate feedback on the correctness of the user's choices, along with a final score at the end of each session.

![Am I Responsive image](/docs/images/responsiveness.png)

## Features

### Category Selection

- Allows users to choose the category of their interest before starting the quiz, enhancing the personalized gaming experience.

![Category selection](/docs/images/category-selection.png)

### Difficulty Settings

- Users can select the difficulty level (Easy, Medium, Hard) which dynamically adjusts the complexity of the questions presented.

### Quiz Questions

- A central display area where questions are presented one at a time. Users interact with this area to select their answers.

![Category selection](/docs/images/question.png)

### Score Tracking

- Throughout the quiz, users can view their current score which updates instantly as they answer questions correctly and a final score will appear after the last quesion.

![Category selection](/docs/images/final-score.png)

### Responsive Design

- Ensures that the quiz is accessible and functional across all devices, providing a consistent experience irrespective of screen size.

![Am I Responsive image](/docs/images/responsiveness.png)

## Features Left to Implement

### Leaderboard

- Implementation of a leaderboard to track and display scores of multiple users, encouraging competition and repeat play.

### Time-based Questions

- Adding a time limit for each question to increase the challenge level of the quiz.

### Score Sharing

- Allow users to share their scores with friends via email.

##  Testing

### Overview

The quiz game has undergone rigorous testing to ensure functionality across different devices and browsers. Testing was primarily focused on ensuring that all interactive elements respond correctly to user inputs and that the game logic accurately tracks and scores user responses. Additionally, the layout adjustments were carefully monitored under various screen sizes to ensure the UI remains intuitive and accessible.

### Feature Testing



### Browser Compatibility

### Responsiveness

### Validator Testing

- HTML: Validation was performed using the W3C Markup Validation Service, confirming that the HTML structure of the website is error-free and complies with web standards.

- CSS: The site's CSS was checked through the W3C CSS Validation Service (Jigsaw), which found no issues, verifying that the stylesheets meet current web development guidelines.

- JavaScript: The JavaScript code for the website underwent validation through JSHint, which highlighted that the script uses ES8 features such as async functions and flagged one unused variable due to a function defined in a separate file. These issues were addressed by annotating cross-file global function usage to clarify the code structure.

![Am I Responsive image](/docs/images/lighthouse-score.png)


### Unfixed Bugs

**Issue 1**

Currently, there is a bug in the quiz application where visual feedback does not consistently work as expected during the gameplay. When a user selects an incorrect answer, the chosen button correctly turns red to indicate a wrong answer; however, the button that represents the correct answer does not always turn green. This issue affects user experience by not providing clear and consistent feedback, which is crucial for learning and game interaction.

**Impact**

This bug can lead to confusion among users as they are not always visually informed of the correct answer after making an incorrect selection. It undermines the educational aspect of the quiz by not reinforcing the correct information through visual cues.

**Current Status**

Unresolved.

**Issue 2**

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

### npmjs HE Library

This project utilizes the HE library for HTML entity encoding and decoding in JavaScript. The HE library is an open-source parser and encoder that greatly simplifies handling HTML entities in web applications. Its robust functionality helps ensure that all text content fetched from external sources is correctly formatted and displayed in the quiz.

The use of this library enhances the application's functionality by allowing it to accurately process and display questions and answers that include special characters and symbols, providing a seamless and error-free user experience.

[Npmjs](https://www.npmjs.com/package/he)

### OpenTDB API

- Questions and answers sourced from Open Trivia Database: OpenTDB.

[OpenTDB](https://opentdb.com/)

### Media

- Background images and icons were sourced from Pixabay and FontAwesome, respectively.

[Pexels](https://www.pexels.com/sv-se/)

[FontAwesome](https://fontawesome.com/)

### Acknowledgements

- My mentor, Sheryl Goldberg, provided invaluable feedback and insightful suggestions for enhancing the project along the way.

- My friend Lucas Behrendt also provided me with feedback and tips from his experience in the same course.