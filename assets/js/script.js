
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

}

// Function to display the question
function displayQuestion() {
  if (questions.length > 0 && currentQuestionIndex < questions.length) {
    setTimeout(() => { // Retrieve the current question from the questions list
      const currentQuestion = questions[currentQuestionIndex];
      document.getElementById('question').textContent = currentQuestion.question;
      currentQuestion.options.forEach((option, index) => {
        document.getElementById(`choice${index + 1}`).textContent = option;
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
