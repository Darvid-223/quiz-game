# quiz-game

- [quiz-game](#quiz-game)
  * [Introduction & Overview](#introduction---overview)
  * [Features](#features)
    + [Category Selection](#category-selection)
    + [Difficulty Settings](#difficulty-settings)
    + [Quiz Questions](#quiz-questions)
    + [Score Tracking](#score-tracking)
    + [Responsive Design](#responsive-design)
  * [Features Left to Implement](#features-left-to-implement)
    + [Leaderboard](#leaderboard)
    + [Time-based Questions](#time-based-questions)
    + [Score Sharing](#score-sharing)
  * [Testing](#testing)
    + [Overview](#overview)
    + [Feature Testing](#feature-testing)
    + [Validator Testing](#validator-testing)
    + [Unresolved Bugs](#unresolved-bugs)
  * [Technologies Used](#technologies-used)
    + [Tools and Resources](#tools-and-resources)
    + [OpenTDB API Integration](#opentdb-api-integration)
  * [Deployment](#deployment)
    + [Github Pages](#github-pages)
    + [Live Site Link](#live-site-link)
  * [Local Development Setup](#local-development-setup)
    + [Introduction](#introduction)
    + [Why Visual Studio Code and WSL?](#why-visual-studio-code-and-wsl-)
    + [Prerequisites](#prerequisites)
    + [Setting Up the Environment](#setting-up-the-environment)
  * [Credits & Acknowledgments](#credits---acknowledgments)
    + [npmjs HE Library](#npmjs-he-library)
    + [OpenTDB API](#opentdb-api)
    + [Media](#media)
    + [Acknowledgements](#acknowledgements)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## Introduction & Overview 

Quiz-Game is a dynamic web application designed to offer a fun and interactive way to test general knowledge across various categories. This project aims to demonstrate the practical application of JavaScript, HTML, and CSS by creating a responsive and engaging user experience. The game targets quiz enthusiasts and learners who seek to test their knowledge in different domains such as geography, science, history, and more. It's designed to be intuitive and accessible, ensuring users of all ages can easily navigate and enjoy the game.

The quiz game is fully responsive, making it available on a variety of devices, ensuring a seamless experience whether on a desktop, tablet, or smartphone. The game progresses through a series of questions, each with multiple-choice answers, and provides immediate feedback on the correctness of the user's choices, along with a final score at the end of each session.

![Am I Responsive image](/docs/images/responsiveness.png)

## Features

### Category Selection

- Allows users to choose the category of their interest before starting the quiz, enhancing the personalized gaming experience.

![Category selection image](/docs/images/category-selection.png)

### Difficulty Settings

- Users can select the difficulty level (Easy, Medium, Hard) which dynamically adjusts the complexity of the questions presented.

### Quiz Questions

- A central display area where questions are presented one at a time. Users interact with this area to select their answers.

![Question image](/docs/images/question.png)

![Question image](/docs/images/correct-answer.png)

![Question image](/docs/images/incorrect-answer.png)

### Score Tracking

- Throughout the quiz, users can view their current score which updates instantly as they answer questions correctly and a final score will appear after the last quesion.

![Final Score image](/docs/images/final-score.png)

### Responsive Design

- Ensures that the quiz is accessible and functional across all devices, providing a consistent experience irrespective of screen size.

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

To ensure the website delivers a high-quality user experience, the site was analyzed using Google's Lighthouse tool. This comprehensive tool assesses the website across multiple dimensions including performance, accessibility, best practices, and SEO. The audit results helped identify areas for improvement and confirm the effectiveness of optimizations. The Lighthouse scores provided valuable insights into the responsiveness and efficiency of the site, ensuring that it meets modern web standards and provides a seamless user experience on various devices and network conditions.

![Lighthouse Score](/docs/images/lighthouse-score.png)

### Validator Testing

- HTML: Validation was performed using the W3C Markup Validation Service, confirming that the HTML structure of the website is error-free and complies with web standards.

- CSS: The site's CSS was checked through the W3C CSS Validation Service (Jigsaw), which found no issues, verifying that the stylesheets meet current web development guidelines.

- JavaScript: The JavaScript code for the website underwent validation through JSHint, which highlighted that the script uses ES8 features such as async functions and flagged one unused variable due to a function defined in a separate file. These issues were addressed by annotating cross-file global function usage to clarify the code structure.

### Unresolved Bugs

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

## Technologies Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)

- [CSS3](https://en.wikipedia.org/wiki/CSS)

- [JavaScript](https://en.wikipedia.org/wiki/javascript) 

### Tools and Resources

- [Git](https://git-scm.com/): Employed for version control, enabling regular commits to Git and updates to GitHub from the terminal in Gitpod.

- [GitHub](https://github.com/): Hosts the repository containing the project's code. GitHub Pages also hosts the live version of the website.

- [Pixels](https://www.pexels.com/sv-se/): Provided royalty-free images and videos, enhancing the visual content of the contact page.

- [W3C Validation](https://www.w3.org/): Used to ensure the website's HTML and CSS adhere to industry standards and best practices.

- [JSHint](https://jshint.com/): A tool that helps to detect errors and potential problems in JavaScript code, ensuring that the code adheres to coding standards and is free from syntax errors.

- [Visual Studio Code](https://code.visualstudio.com/): The code editor of choice for developing the website, offering powerful coding and debugging tools.

- [OpenAI's ChatGPT](https://openai.com/): Assisted in validating code, checking spelling, providing translations, offering coding advice, and supporting the refinement of the website's content and functionality. ChatGPT also played a role in generating content for documentation and assisting with real-time troubleshooting during development.

- [Font Awesome](https://fontawesome.com/): Supplied the vector icons integrated throughout the website.

- [Google Fonts](https://fonts.google.com/): The source of all custom typography on the website, enhancing the user interface's aesthetics.

- [Chrome DevTools](https://developer.chrome.com/docs/devtools/): An indispensable suite of web development tools used extensively in the website's development process.

- [Open Trivia Database (OpenTDB)](https://opentdb.com/): Provides a free API that supplies the trivia questions for the quiz, allowing for a diverse range of questions on various topics and difficulties.

- [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/): Enabled the use of Linux tools on Windows, such as running a local development server through Python's HTTP server module by executing `python -m http.server`.

### OpenTDB API Integration

**Overview**

The Open Trivia Database (OpenTDB) API is a pivotal component of this project, enabling the dynamic generation of quiz questions. This free API allows for access to a large repository of trivia questions across multiple categories and difficulties.

**Functionality**

In the Quiz Game, the API is configured to fetch questions based on user-selected preferences from five different categories: Geography, General Knowledge, Film, Science & Nature, and History. Additionally, users can choose the difficulty level for the questions: Easy, Medium, or Hard. This functionality ensures that the quiz content is not only diverse but also tailored to the individual preferences of the user, enhancing the overall engagement and educational value of the game.

**Implementation**

The integration involves sending requests to the OpenTDB API and handling the responses to format and display the questions and answer choices appropriately within the quiz interface. The API's flexibility allows for seamless customization of the quiz content, catering to a wide range of knowledge bases and interests.

## Deployment

### Github Pages

The project was successfully deployed to GitHub Pages. Here are the steps I followed to deploy the project:

1. **GitHub Repository Setup**:
   - The development was done locally and the changes were pushed to GitHub regularly using Git.

2. **Preparing for Deployment**:
   - All final changes were committed and pushed to GitHub to ensure that the repository was up-to-date.

3. **Activating GitHub Pages**:
   - Navigate to the 'Settings' tab of the GitHub repository.
   - Scroll down to the 'Pages' section.
   - Select the branch to deploy from the source section drop-down menu (typically `main` or `master`) and choose the folder (`/ (root)` or `/docs`).

4. **Deployment Execution**:
   - GitHub Pages automatically deploys the project upon source selection. The page will refresh, providing a link to the deployed site.
   - This URL allows public access to the live version of the project.

5. **Post-Deployment Testing**:
   - I conducted a thorough review of the live site to ensure that all functionalities worked as expected.
   - I tested all links, features, and responsiveness to confirm that the live site behaved identically to the local development version.

### Live Site Link

- The live site can be accessed through this URL: [https://darvid-223.github.io/quiz-game/index.html](https://darvid-223.github.io/quiz-game/index.html). This provides users with direct interaction with the fully functional deployed application.

## Local Development Setup

### Introduction

While the course recommends using Codeanywhere as a cloud-based development environment, for this project, I opted to use Visual Studio Code installed locally on my Windows computer. My familiarity with Visual Studio Code and its immediate responsiveness compared to the process of setting up and loading Codeanywhere each time greatly influenced this choice.

### Why Visual Studio Code and WSL?

Visual Studio Code is a powerful and versatile code editor that supports a wide range of programming languages and frameworks. Its extensive library of extensions makes it highly customizable, fitting perfectly into my workflow. Furthermore, by leveraging the Windows Subsystem for Linux (WSL), I was able to create a Linux-like development environment on Windows. This setup allowed me to use Linux commands and tools directly in Windows, offering the best of both worlds for web development.

Choosing Visual Studio Code and WSL over Codeanywhere was a strategic decision to optimize my development process, capitalizing on speed and efficiency without sacrificing the versatility and power needed for complex web development tasks.

### Prerequisites

To replicate this local development environment, I installed the following programs to my system:

- Visual Studio Code as my primary code editor.
- Windows Subsystem for Linux (WSL) for a Linux-compatible terminal and development environment on Windows.
- Git for version control and cloning the project repository.

### Setting Up the Environment

1. Install WSL: Follow the instructions provided by Microsoft to install WSL on your Windows machine. Choose a Linux distribution of your preference from the Microsoft Store (Ubuntu is a popular choice).

2. Install Visual Studio Code: Download and install Visual Studio Code from the official website. Once installed, enhance your setup with extensions like Live Server for real-time page reloading and the WSL extension to integrate your Linux environment seamlessly.

3. Clone the Repository: Open VS Code's integrated terminal, switch to your WSL environment, and clone the Restaurant Ernesto repository using Git:
git clone https://github.com/Darvid-223/quiz-game.git
cd ernesto

4. Run the Project Locally: With the repository cloned to your local machine, you can start a simple HTTP server to serve the project files. If you have Python installed in your WSL environment, you can use it to start a server:
python -m http.server

## Credits & Acknowledgments

### npmjs HE Library

This project incorporates the HE library to decode HTML entities in data retrieved from an external API. The HE library is an open-source tool designed to encode and decode HTML entities in JavaScript, which is essential for accurately handling and displaying text content that includes special characters and symbols. By integrating this library, the application ensures that questions and answers fetched from the API are correctly formatted, thus enhancing the user experience by presenting content without any encoding errors. This functionality is crucial for maintaining the integrity and readability of the quiz content, especially when it includes various HTML entities.

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