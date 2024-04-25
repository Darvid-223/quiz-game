
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
