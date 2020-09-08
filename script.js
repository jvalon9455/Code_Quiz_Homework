// console.log("Hello World")

var timeClock = document.getElementById("time-clock");
var startButton = document.getElementById("start-btn");
var questionConEl = document.getElementById("question-container")

startButton.addEventListener("click", startQuiz)

function startQuiz(){
    console.log("Started quiz")
    startButton.classList.add("hide")
    questionConEl.classList.remove("hide")

}

function nextQuestion(){

}

function pickedAnswer(){

}

var quizQuestionArray = [
    {
      question: "Commonly used data types DO NOT include:",
      answers: [
        { text: "strings", correct: false },
        { text: "booleans", correct: false },
        { text: "alerts", correct: true },
        { text: "numbers", correct: false },
      ],
    },
    {
      question: "The condition in an if/else statement is enclosed within:",
      answers: [
        { text: "quotes", correct: false },
        { text: "curly brackets", correct: false },
        { text: "parentheses", correct: true },
        { text: "square brackets", correct: false },
      ],
    },
    {
      question: "Arrays in JavaScript can be used to store:",
      answers: [
        { text: "numbers and strings", correct: false },
        { text: "other arrays", correct: false },
        { text: "booleans", correct: false },
        { text: "all of the above", correct: true },
      ],
    },
    {
      question:
        "String values must be enclosed within ______ when being assigned to variables:",
      answers: [
        { text: "commas", correct: false },
        { text: "curly brackets", correct: false },
        { text: "quotes", correct: true },
        { text: "parentheses", correct: false },
      ],
    },
    {
      question:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      answers: [
        { text: "JavaScript", correct: false },
        { text: "terminal / bash", correct: false },
        { text: "for loops", correct: false },
        { text: "console.log", correct: true },
      ],
    },
  ];
  