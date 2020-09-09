// console.log("Hello World")

var timeClock = document.getElementById("time-clock");
var startButton = document.getElementById("start-btn");
var buttonList = document.getElementById("answer-btn");

startButton.addEventListener("click", startQuiz)

function startQuiz(){
    console.log("Started quiz")
    startButton.classList.add("hide")
    buttonList.classList.remove("hide")
    nextQuestion()

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
]