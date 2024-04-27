
// variables
let questions = []; 
let currentQuestionIndex = 0; // tracks current question index
let score = 0;  // score

// Eventlistener that loads after html is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  let buttons = document.querySelectorAll('.choice'); // Select all elements with the class "choice" and assign them to the "buttons" variable
  buttons.forEach(function(button) {    // Loop over each button
      button.addEventListener('click', function() { // Add a click event listener to each button
          selectAnswer(this.id); 
      });
  });

  document.getElementById('newGameButton').addEventListener('click', startNewGame); // Added event listener to id: "newGameButton", and calling "startNewGame" function when clicked
});


// Function to initiate the game
function startNewGame() {
  fetchTriviaQuestions().then(fetchedQuestions => {
    questions = fetchedQuestions; // Store fetched questions
    currentQuestionIndex = 0; // Reset the question index to start from the first question
    displayQuestion(); // Display the first question
  });
}


function selectAnswer(buttonId) {
  const buttons = document.querySelectorAll('.choice');
  buttons.forEach(button => {
      button.disabled = true; // Disable all buttons to prevent further clicks
  });

  const selectedButton = document.getElementById(buttonId);
  const selectedAnswer = selectedButton.textContent;
  const correctAnswer = questions[currentQuestionIndex].answer;

  if (selectedAnswer === correctAnswer) {
    selectedButton.style.backgroundColor = 'green'; // Indicate correct answer
    console.log("Correct Answer!");
    score++;

  } else {
    selectedButton.style.backgroundColor = 'red'; // Indicate wrong answer
    console.log("Wrong Answer!");
    
    // Find and color the correct answer button green
    buttons.forEach(button => {
      if (button.textContent === correctAnswer) {
        button.style.backgroundColor = 'green'; // Indicate correct answer
      }
    });
  }



  
  updateScoreDisplay(); // update score

  // Wait for 3 seconds before moving to the next question
  setTimeout(() => {
    currentQuestionIndex++; // Move to the next question
    if (currentQuestionIndex < questions.length) {
      displayQuestion(); // Display the next question
      resetButtonStyles(); // Reset the button styles for the new question

    } else {
      gameOver(); // Initiate gameOver function when all questions are answered
    }
  }, 2500);
}

function resetButtonStyles() {
  document.querySelectorAll('.choice').forEach(button => {
    button.style.backgroundColor = ''; // Reset the background color
    button.disabled = false; // Re-enable the buttons
  });
}


// function to update score
function updateScoreDisplay() {
  const scoreElement = document.getElementById('currentScore'); // Assume there's an element with id 'scoreDisplay'
  if (scoreElement) {
      scoreElement.textContent = `Score: ${score}`;
  }
}


// Function to display the question
function displayQuestion() {
  if (questions.length > 0 && currentQuestionIndex < questions.length) {
    setTimeout(() => {
      const currentQuestion = questions[currentQuestionIndex];
      
      document.getElementById('question').textContent = he.decode(currentQuestion.question); // Decode HTML entities in the question text
      currentQuestion.options.forEach((option, index) => {
        
        document.getElementById(`choice${index + 1}`).textContent = he.decode(option); // Decode HTML entities in each option and update the button text
      });
    }, 100); // Delay to allow DOM time to update
  } else {
    console.log("No questions available or an error occurred"); // print a message to console if no questions are availale or other errors occurred
  }
}


// Game over function
function gameOver() {
  console.log("Game OVer!");
      
      const questionDiv = document.getElementById('question'); // Hide the question div
      questionDiv.style.display = 'none';
  
    
      const choiceButtons = document.querySelectorAll('.choice'); // Hide all choice buttons within the quiz container
      choiceButtons.forEach(button => {
          button.style.display = 'none';
      });
}



