// console.log("Hello World")
var startCodingQuizBtn = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var paragraphPrompt = document.getElementById("paragraph-prompt");
var questionEl = document.getElementById("question");
var timeEl = document.querySelector(".time");
var secondsLeft = 90;

// create variables for answer buttons
var answerButtonA = document.getElementById("A");
var answerButtonB = document.getElementById("B");
var answerButtonC = document.getElementById("C");
var answerButtonD = document.getElementById("D");

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
          questionOne: "Commonly used data types DO NOT include:",
          A: "strings",
          B: "booleans",
          C: "alerts",
          D: "numbers",
          correctAnswerOne: "C",
        },
        {
          questionTwo:
            "The condition in an if/else statement is enclosed within ______.",
          A: "quotes",
          B: "curly brackets",
          C: "parentheses",
          D: "square brackets",
          correctAnswerTwo: "C",
        },
        {
          questionThree: "Arrays in JavaScript can be used to store _______.",
          A: "numbers and strings",
          B: "other arrays",
          C: "booleans",
          D: "all of the above",
          correctAnswerThree: "D",
        },
        {
          questionFour:
            "String values must be enclosed within ____ when being assigned to variables",
          A: "commas",
          B: "curly brackets",
          C: "quotes",
          D: "parentheses",
          correctAnswerFour: "C",
        },
        {
          questionFive:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
          A: "JavaScript",
          B: "terminal/bash",
          C: "for loops",
          D: "console.log",
          correctAnswerFive: "D",
        },
      ];
      console.log(questionPrompts);