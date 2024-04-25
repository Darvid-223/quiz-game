
// variable to store questions
let questions = [];

// Eventlistener that loads after html is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  let buttons = document.querySelectorAll('.choice');
  buttons.forEach(function(button) {
      button.addEventListener('click', function() {
          selectAnswer(this.id);
      });
  });

  document.getElementById('newGameButton').addEventListener('click', startNewGame);
});




function selectAnswer(buttonId) {
  console.log("Button clicked:", buttonId);

}

// Function to display the question
function displayQuestion() {
  if (questions.length > 0 && currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question; // Display the question text
    
    // Display each of the answer choices
    currentQuestion.options.forEach((option, index) => {
      const choiceButton = document.getElementById(`choice${index + 1}`);
      if (choiceButton) {
        choiceButton.textContent = option;
      }
    });
  } else {
    console.log("No questions available or an error occurred");
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
