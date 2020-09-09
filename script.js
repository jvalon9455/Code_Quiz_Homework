// console.log("Hello World")
var startCodingQuizBtn = document.getElementById("start-btn")
var questionContainer = document.getElementById("question-container")
var paragraphPrompt = document.getElementById("paragraph-prompt")

startCodingQuizBtn.addEventListener("click", startQuiz)

function startQuiz(){
    // console.log("Started quiz")It works!
    startCodingQuizBtn.classList.add("hide")
    paragraphPrompt.classList.add("hide")
    questionContainer.classList.remove("hide")

}

function nextQuestionEl(){

}


function selectAnswer(){

}