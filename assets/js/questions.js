let fetchTriviaQuestions = async (difficulty = 'easy') => {
  // get 10 multiple choice question, medium as default argument
  let url = `https://opentdb.com/api.php?amount=10&type=multiple&difficulty=${difficulty}`; 
  let response = await fetch(url);
  // Check if the response was successful
  if (!response.ok) { 
      console.error("Failed to fetch questions:", response.status);
      // Return an empty array in case of failure
      return []; 
  }
  let data = await response.json();
  let formattedQuestions = data.results.map(item => ({
      question: item.question,
      options: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5), // randomize options
      answer: item.correct_answer
  }));
  return formattedQuestions;
};