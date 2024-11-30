// List of questions and their answers
const questions = [
    { question: "9-3+2", answer: 8 },
    { question: "8-7+3-5", answer: -1 },
    { question: "9-3-8+7-6", answer: -1 },
    { question: "5+6-4-3+8-3", answer: 9 },
    { question: "9+6-5-4+8+6", answer: 20 },
    { question: "9+6-2-7+8-6+9", answer: 17 },
    { question: "6+9+3-8-6+9", answer: 13 },
    { question: "8+6-7-6+8-5+8", answer: 12 },
    { question: "4+6-3+2+4-2", answer: 11 },
    { question: "2+3-4+8+2", answer: 11 },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const answerElement = document.getElementById("answer");
  const submitButton = document.getElementById("submit-answer");
  const resultContainer = document.getElementById("result-container");
  const scoreElement = document.getElementById("score");
  
  function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
    } else {
      showResults();
    }
  }
  
  function checkAnswer() {
    const userAnswer = parseInt(answerElement.value, 10);
    const correctAnswer = questions[currentQuestionIndex].answer;
  
    if (userAnswer === correctAnswer) {
      score++;
    }
  
    currentQuestionIndex++;
    answerElement.value = ""; // Clear the input field
    loadQuestion();
  }
  
  function showResults() {
    document.getElementById("question-container").style.display = "none";
    resultContainer.style.display = "block";
    scoreElement.textContent = `You got ${score} out of ${questions.length} correct!`;
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.style.display = "none";
    document.getElementById("question-container").style.display = "block";
    loadQuestion();
  }
  
  // Event listener for the submit button
  submitButton.addEventListener("click", checkAnswer);
  
  // Load the first question
  loadQuestion();
  