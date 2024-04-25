
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



function startNewGame() {
  fetchTriviaQuestions().then(fetchedQuestions => {
    questions = fetchedQuestions; // Store 10 fetched questions
    console.log("New game started, questions fetched:", questions);
    
  });
}