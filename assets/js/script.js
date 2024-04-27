
// variable to store questions
let questions = [];

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


function selectAnswer(buttonId) {
  console.log("Button clicked:", buttonId);

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
  } else {
    selectedButton.style.backgroundColor = 'red'; // Indicate wrong answer
    console.log("Wrong Answer!");
  }
  // Wait for 3 seconds before moving to the next question
  setTimeout(() => {
    currentQuestionIndex++; // Move to the next question
    if (currentQuestionIndex < questions.length) {
      displayQuestion(); // Display the next question
      resetButtonStyles(); // Reset the button styles for the new question
    } else {
      console.log("End of quiz");
      // Optionally, reset the game or display final score
    }
  }, 3000);
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
    setTimeout(() => {
      const currentQuestion = questions[currentQuestionIndex];
      // Decode HTML entities in the question text
      document.getElementById('question').textContent = he.decode(currentQuestion.question);
      currentQuestion.options.forEach((option, index) => {
        // Decode HTML entities in each option and update the button text
        document.getElementById(`choice${index + 1}`).textContent = he.decode(option);
      });
    }, 100); // Delay to allow DOM time to update
  } else {
    console.log("No questions available or an error occurred"); // print a message to console if no questions are availale or other errors occurred
  }
}




// Function to initiate the game
function startNewGame() {
  fetchTriviaQuestions().then(fetchedQuestions => {
    questions = fetchedQuestions; // Store fetched questions
    currentQuestionIndex = 0; // Reset the question index to start from the first question
    displayQuestion(); // Display the first question
  });
}



