// console.log("Hello World")
var startCodingQuizBtn = document.getElementById("start-btn")
var questionContainer = document.getElementById("question-container")
var paragraphPrompt = document.getElementById("paragraph-prompt")
var questionList = document.getElementById("question-list")
var questionsAsked = document.getElementById("questions-asked")
var answerBtn = document.getElementById("answer-btn")

startCodingQuizBtn.addEventListener("click", startQuiz)

function startQuiz(){
    // console.log("Started quiz")It works!
    startCodingQuizBtn.classList.add("hide")
    paragraphPrompt.classList.add("hide")
    questionContainer.classList.remove("hide")
    nextQuestionEl()

}

function nextQuestionEl(){

}

function showNextQuestion(question){
    questionsAsked.innerText = question.question 

}

function selectAnswer(){

}

var questionPrompts = [
    {
        question: "Commonly used data types DO NOT include",
        answers: [
            {text: "strings", correct: false},
            {text: "booleans", correct: false},
            {text: "alerts", correct: true},
            {text: "numbers", correct: false},
        ]
    }
]