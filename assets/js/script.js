
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
    let selectedDifficulty = document.getElementById('difficulty').value;
    fetchTriviaQuestions(selectedDifficulty).then(fetchedQuestions => {
    if (fetchedQuestions.length === 0) {
      console.error("Failed to start game due to no fetched questions.");
      return; // Exit if no questions are fetched
    }
    questions = fetchedQuestions; // Store fetched questions
    const gameOverMessage = document.getElementById('gameOverMessage');
    gameOverMessage.style.display = 'none';
    currentQuestionIndex = 0; // Reset the question index to start from the first question
    score = 0; // reset score variable

    updateScoreDisplay() // update score element
    resetButtonStyles(); // reset button color
    showElements() // show buttons 
    displayQuestion(); // Display the first question
  });
}



// Function to update score
function updateScoreDisplay() {
  const scoreElement = document.getElementById('currentScore');
  if (scoreElement) {
      scoreElement.textContent = score; // Update score text
  }
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





// Function to display the question
function displayQuestion() {
  if (questions.length > 0 && currentQuestionIndex < questions.length) {

    const currentQuestion = questions[currentQuestionIndex];
    
    document.getElementById('question').textContent = he.decode(currentQuestion.question); // update displayed question and decode HTML entities in the question text

    currentQuestion.options.forEach((option, index) => {
      document.getElementById(`choice${index + 1}`).textContent = he.decode(option); // Update choice button text and decode HTML entities in each option and update the button text
    });
    
    const questionCountDisplay = document.getElementById('correctCount'); // Update the question counter on the UI
    questionCountDisplay.textContent = `${currentQuestionIndex + 1} / ${questions.length}`; // Display the current question index + 1 since index is 0-based

  } else {
    console.log("No questions available or an error occurred"); // print a message to console if no questions are availale or other errors occurred
  }
}


// Game over function
function gameOver() {
  hideElements()

  const gameOverMessage = document.getElementById('gameOverMessage');
  if (gameOverMessage) {
    gameOverMessage.textContent = `Game Over! Final score: ${score}.`;
    gameOverMessage.style.display = 'block'; // show element
  }
}


function hideElements() {
  const questionDiv = document.getElementById('question'); // Hide the question div
  questionDiv.style.display = 'none';


  const choiceButtons = document.querySelectorAll('.choice'); // Hide all choice buttons within the quiz container
  choiceButtons.forEach(button => {
      button.style.display = 'none';
  });
}

function showElements() {
  const questionDiv = document.getElementById('question');
  questionDiv.style.display = 'block'; // Show the question div

  const difficultyDiv = document.getElementById('difficulty-selection');
  difficultyDiv.style.display = 'none';

  
  const choiceButtons = document.querySelectorAll('.choice');
  choiceButtons.forEach(button => {
      button.style.display = 'block'; // Show all choice buttons
  });
}

