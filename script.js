// console.log("Hello World")
var startCodingQuizBtn = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var paragraphPrompt = document.getElementById("paragraph-prompt");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer-btn")
var timeEl = document.querySelector(".time");
var secondsLeft = 90;
var endQuizEl = document.getElementById("endQuizPage");
var score = 0;

// create variables for answer buttons
var answerButtonA = document.getElementById("A");
var answerButtonB = document.getElementById("B");
var answerButtonC = document.getElementById("C");
var answerButtonD = document.getElementById("D");

// add click function to start quiz
startCodingQuizBtn.addEventListener("click", startQuiz);

// hide endgame submission form before start of game
endGame.classList.add("hide");

// start timer
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time left:" + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

// create question array with questions and answers
var questionPrompts = [
    {
        firstQuestion: "Commonly used data types DO NOT include:",
        A: "alerts",
        B: "booleans",
        C: "strings",
        D: "numbers",
        correctAnswerOne: "A",
    },
    {
        secondQuestion:
            "The condition in an if/else statement is enclosed within ______.",
        A: "parentheses",
        B: "curly brackets",
        C: "quotes",
        D: "square brackets",
        correctAnswerTwo: "A",
    },
    {
        thirdQuestion: "Arrays in JavaScript can be used to store _______.",
        A: "all of the above",
        B: "other arrays",
        C: "booleans",
        D: "numbers and strings",
        correctAnswerThree: "A",
    },
    {
        fourthQuestion:
            "String values must be enclosed within ____ when being assigned to variables",
        A: "quotes",
        B: "curly brackets",
        C: "commas",
        D: "parentheses",
        correctAnswerFour: "A",
    },
    {
        fifthQuestion:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        A: "console.log",
        B: "terminal/bash",
        C: "for loops",
        D: "JavaScript",
        correctAnswerFive: "A",
    },
]; 
//   console.log(questionPrompts);

// start the quiz and show the first question
function startQuiz() {
    // console.log("Started quiz")It works!
    setTime();
    startCodingQuizBtn.classList.add("hide");
    paragraphPrompt.classList.add("hide");
    quizOne();
    questionContainer.classList.remove("hide");

}; var currentQuestionIndex = 0;

function quizOne() {

    questionEl.textContent = questionPrompts[0]["firstQuestion"];
    answerButtonA.textContent = questionPrompts[0]["A"];
    answerButtonB.textContent = questionPrompts[0]["B"];
    answerButtonC.textContent = questionPrompts[0]["C"];
    answerButtonD.textContent = questionPrompts[0]["D"];
}

function quizTwo() {
    questionEl.textContent = questionPrompts[1]["secondQuestion"];
    answerButtonA.textContent = questionPrompts[1]["A"];
    answerButtonB.textContent = questionPrompts[1]["B"];
    answerButtonC.textContent = questionPrompts[1]["C"];
    answerButtonD.textContent = questionPrompts[1]["D"];
}

function quizThree() {
    questionEl.textContent = questionPrompts[2]["thirdQuestion"];
    answerButtonA.textContent = questionPrompts[2]["A"];
    answerButtonB.textContent = questionPrompts[2]["B"];
    answerButtonC.textContent = questionPrompts[2]["C"];
    answerButtonD.textContent = questionPrompts[2]["D"];
}

function quizFour() {
    questionEl.textContent = questionPrompts[3]["fourthQuestion"];
    answerButtonA.textContent = questionPrompts[3]["A"];
    answerButtonB.textContent = questionPrompts[3]["B"];
    answerButtonC.textContent = questionPrompts[3]["C"];
    answerButtonD.textContent = questionPrompts[3]["D"];
}

function quizFive() {
    questionEl.textContent = questionPrompts[4]["fifthQuestion"];
    answerButtonA.textContent = questionPrompts[4]["A"];
    answerButtonB.textContent = questionPrompts[4]["B"];
    answerButtonC.textContent = questionPrompts[4]["C"];
    answerButtonD.textContent = questionPrompts[4]["D"];
}

// create event Listeners for when answer buttons are clicked
// wrong answers = deduction of 10 seconds
// after answer is selected, move to next question 
var currentQuestionIndex
var correct

answerEl.addEventListener("click", function (event) {
    if (event.target.value === "A") {
        correct++;
        // console.log("Correct!");
    } else {
        secondsLeft--;
        secondsLeft = secondsLeft - 10;
        // console.log("Wrong!");
    }
    currentQuestionIndex++
    //   console.log(currentQuestionIndex);

    if (currentQuestionIndex === 1) {
        quizTwo();
    }

    else if (currentQuestionIndex === 2) {
        quizThree();
    }

    if (currentQuestionIndex === 3) {
        quizFour();
    }
    else if (currentQuestionIndex === 4) {
        quizFive();
    }
});

// create endquiz
function endQuiz() {
     endQuizPage.classList.remove("hide");
     console.log("hide")
     clearInterval(timerInterval);
    timeEl.textContent = "0";
    finalScore.textContent = score;
    
// submit highscore with initials
// save it in local storage
// YOU GOT THIS! Redo whenever you have freetime to get better and find simpler solutions
}
