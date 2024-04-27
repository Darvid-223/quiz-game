
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
      const currentQuestion = questions[currentQuestionIndex];
      
      const questionText = unescapeHtml(currentQuestion.question); // Unescape HTML enitites in quesion
      document.getElementById('question').textContent = questionText;

      currentQuestion.options.forEach((option, index) => {
          
          const choiceText = unescapeHtml(option); // Unescape HTML entities in each choice
          document.getElementById(`choice${index + 1}`).textContent = choiceText;
      });
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



// function to unescape html entities
function unescapeHtml(html) {
  let temp = document.createElement("div"); // Create a temporary div element
  temp.innerHTML = html; // Set the HTML content to argument
  return temp.textContent || temp.innerText || ""; // Retrieve the text from the div
}
