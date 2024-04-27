let fetchTriviaQuestions = async () => {
  let url = 'https://opentdb.com/api.php?amount=10&type=multiple'; // get 10 multiple choice questions
  let response = await fetch(url);
  if (!response.ok) { // Check if the response was successful
      console.error("Failed to fetch questions:", response.status);
      return []; // Return an empty array in case of failure
  }
  let data = await response.json();
  let formattedQuestions = data.results.map(item => ({
      question: item.question,
      options: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5), // randomize options
      answer: item.correct_answer
  }));
  return formattedQuestions;
};

// Store questions
let getQuestions = async () => {
  let easyQuestions = await fetchTriviaQuestions();
  console.log(easyQuestions); // print questions in console
};

//getQuestions();


