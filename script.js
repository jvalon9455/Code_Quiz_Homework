// console.log("Hello World")
var startCodingQuizBtn = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var paragraphPrompt = document.getElementById("paragraph-prompt");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answers");
var timeEl = document.querySelector(".time");
var secondsLeft = 90;


startCodingQuizBtn.addEventListener("click", startQuiz);

var quizQuestions, currentQuestionIndex

// start the quiz and show the first question
function startQuiz() {
    // console.log("Started quiz")It works!
    setTime();
    startCodingQuizBtn.classList.add("hide");
    paragraphPrompt.classList.add("hide");
    quizQuestions = questionPrompts.sort(() => Math.random());
    currentQuestionIndex = 0;
    questionContainer.classList.remove("hide");
    nextQuestionEl();

};
 function showQuizQuestion (question) {
    questionEl.innerText = question.question;
    question.answer.forEach(answer => {
        var button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        answerButtonsEl.appendChild(button);
    });
 }
    function nextQuestionEl() {
        showQuizQuestion(quizQuestions[currentQuestionIndex])
    }

    function selectAnswer(e) {

    }

    function setTime() {
        var timerInterval = setInterval(function () {
            secondsLeft--;
            timeEl.textContent = secondsLeft;

            if (secondsLeft === 0) {
                clearInterval(timerInterval);
            }
        }, 1000);
    }

    var questionPrompts = [
        {
            question: "Commonly used data types DO NOT include:",
            answers: [
                { text: "strings", correct: false },
                { text: "booleans", correct: false },
                { text: "alerts", correct: true },
                { text: "numbers", correct: false },
            ]
        }
    ]
