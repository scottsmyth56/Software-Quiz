const quiz = {
    easy: [{
            prompt: "What is software development?",
            choices: [
                "The process of creating and maintaining software applications",
                "The process of designing and building hardware devices",
                "The process of maintaining and updating a website",
                "The process of creating and managing databases"
            ],
            answer: 0
        },
        {
            prompt: "What is the common programming language used in web development?",
            choices: ["HTML", "C++", "Python", "Javascript"],
            answer: 0
        },
        {
            prompt: "What does CSS stand for?",
            choices: ["Colorful Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
            answer: 2
        },
        {
            prompt: "Where in an HTML document is the correct place to refer to an external style sheet?",
            choices: ["In the body section", "In the head section", "At the end of the document", "In a header section"],
            answer: 2
        },
        {
            prompt: "Which HTML tag is used to define an internal style sheet?",
            choices: ["style", "css", "link", "script"],
            answer: 0
        },
        {
            prompt: "Java can run on any computer platform that has a ...?",
            choices: ["Java compiler", "Java Virtual Machine", "Linux OS", "Intel Pentium"],
            answer: 1
        },
        {
            prompt: "Which HTML tag hyperlinks text?",
            choices: ["DIV", "A", "IFRAME", "BR"],
            answer: 1
        },
        {
            prompt: "Which of the following shows the construction of an object?",
            choices: [
                "ConsoleWindow c = new ConsoleWindow();",
                "int sum = 0;",
                "final int STOP = -999;",
                "int value = c.input.readint();"
            ],
            answer: 0
        }
    ],
    medium: [{
            prompt: "One or more defects occurring in the computer software that prevents the software from working is called",
            choices: ["bot", "system error", "bug", "slug"],
            answer: 2
        },
        {
            prompt: "What is a framework in software development?",
            choices: [
                "A set of tools and libraries for building software application",
                "A specific way of organizing and structuring code",
                "A tool for debugging code",
                "A set of design patterns for building software applications"
            ],
            answer: 0
        },
        {
            prompt: "What is a database index?",
            choices: [
                "A way of sorting data in a database for faster searches",
                "A copy of the database for backup purposes",
                "A graphical representation of the data in a database",
                "A tool for optimizing the performance of a database"
            ],
            answer: 0
        },
        {
            prompt: "What is a software design pattern?",
            choices: [
                "A technique for testing the functionality of a software application",
                "A standardized solution to a common software design problem",
                "A tool for visualizing the structure of a software system",
                "A way of organizing and structuring code"
            ],

            answer: 1
        },
        {
            prompt: "What is a software development kit (SDK)?",
            choices: [
                "A tool for debugging code",
                "A specific way of organizing and structuring code",
                "A set of tools and libraries for building software applications",
                "All of the above"
            ],
            answer: 2
        },
        {
            prompt: "What is a distributed version control system?",
            choices: [
                "A version control system that stores code on a central server",
                "A version control system that stores code locally on a developer's machine",
                "A version control system that stores code on multiple servers",
                "A version control system that stores code in the cloud"
            ],
            answer: 2
        },
        {
            prompt: "What is a software requirement specification (SRS)?",
            choices: [
                "A document that outlines the testing plan for a software project",
                "A document that outlines the design of a software project",
                "A document that outlines the requirements and constraints for a software project",
                "All of the above"
            ],
            answer: 2
        },
        {
            prompt: "What is a software development life cycle (SDLC)?",
            choices: [
                "The process of designing, implementing, and maintaining software",
                "The process of debugging, testing, and maintaining software",
                "The process of creating and maintaining documentation for a software project",
                "The process of planning, creating, testing, and maintaining software"
            ],
            answer: 3
        }
    ],
    hard: [{
            prompt: "Which of the following is not an OOPS concept in Java?",
            choices: [
                "Polymorphism",
                "Inheritance",
                "Compilation",
                "Encapsulation"
            ],
            answer: 2
        },
        {
            prompt: "What is Truncation in Java?",
            choices: [
                "Floating-point value assigned to a Floating type",
                "Floating-point value assigned to an integer type",
                "Integer value assigned to floating type",
                "Integer value assigned to floating type"
            ],
            answer: 1
        },
        {
            prompt: "Which was the first purely object oriented programming language developed?",
            choices: [
                "Kotlin",
                "SmallTalk",
                "Java",
                "C++"
            ],
            answer: 1
        },
        {
            prompt: "Which of the following is a feature of DBMS?",
            choices: [
                "Minimum Duplication and Redundancy of Data",
                "High Level of Security",
                "Single-user Access only",
                "Support ACID Property"
            ],
            answer: 2
        },
        {
            prompt: "What is information about data called?",
            choices: [
                "Hyper data",
                "Tera data",
                "Meta data",
                "Relations"
            ],
            answer: 2
        },
        {
            prompt: "Agile Software Development is based on which of the following type?",
            choices: [
                "Iterative Development",
                "Incremental Development",
                "Both Incremental and Iterative Development",
                "Linear Development"
            ],
            answer: 2
        },
        {
            prompt: "In multilevel inheritance, which is the most significant feature of OOP used?",
            choices: [
                "Code efficiency",
                "Code readability",
                "Flexibility",
                "Code reusability"
            ],
            answer: 3
        },
        {
            prompt: "What happens when an object is passed by reference?",
            choices: [
                "Destructor is called at end of function",
                "Destructor is called when called explicitly",
                "Destructor is not called",
                "Destructor is called when function is out of scope"
            ],
            answer: 2
        },


    ]
};

let currentIndex = 0;
let currentDifficulty = "easy";
let score = 0;

const resetButton = document.getElementById('reset-button');
const startMenuButton = document.getElementById('menu-button');
// const resultsMenuButton = document.getElementById('ResultsMenu-button');
quizResults = document.getElementById("quiz-results");
quizQuestions = document.getElementById("quiz-questions");
quizAnswers = document.getElementById("quiz-answers");
resetButton.addEventListener('click', resetQuiz);
startMenuButton.addEventListener('click', function () {
    window.location.reload();
});

remaining = (quiz[currentDifficulty].length) - 1;


document.addEventListener("DOMContentLoaded", () => {
    // Display the username and difficulty buttons
    const username = document.getElementById("username").value;
    const easyBtn = document.getElementById("easy");
    const mediumBtn = document.getElementById("medium");
    const hardBtn = document.getElementById("hard");

    easyBtn.addEventListener("click", () => {
        startQuiz("easy");
    });
    mediumBtn.addEventListener("click", () => {
        startQuiz("medium");
    });
    hardBtn.addEventListener("click", () => {
        startQuiz("hard");
    });

});

function startQuiz(difficulty) {
    // Update the current difficulty and reset the score and current index
    const username = document.querySelector("#username").value;
    if (username === "") {
        alert("Please enter your username");
        return;
    }
    currentDifficulty = difficulty;
    score = 0;
    currentIndex = 0;

    // Update the user and remaining questions elements
    document.getElementById("remaining-value").innerHTML = quiz[currentDifficulty].length;

    // Hide the quiz form and start the quiz
    document.getElementById("quiz-form").style.display = "none";
    document.querySelector("#score").style.display = "block";
    document.querySelector("#remaining").style.display = "block";
    document.querySelector("#user-div").style.display = "block";
    document.querySelector("#time").style.display = "block";
    document.querySelector("#quiz").style.display = "block";
    resetButton.style.display = "block";
    startMenuButton.style.display = "block";
    document.getElementById("names").innerHTML = username;
    document.getElementById("content").style.display = "none";
    showQuestion();
    startTimer();
}

function showQuestion() {
    // Get the current question
    document.getElementById("remaining-value").innerHTML = remaining;

    const currentQuestion = quiz[currentDifficulty][currentIndex];

    // Display the question and answer choices

    document.getElementById("quiz-questions").innerHTML = currentQuestion.prompt;
    let answersHTML = "";
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        answersHTML += `<button class="answer-btn" value="${i}">${currentQuestion.choices[i]}</button>`;
    }

    document.getElementById("quiz-answers").innerHTML = answersHTML;

    // Add event listeners for the answer buttons
    const answerBtns = document.querySelectorAll(".answer-btn");
    for (const btn of answerBtns) {
        btn.addEventListener("click", checkAnswer);
    }
}

function checkAnswer(event) {
    // Get the selected answer
    const selectedAnswer = Number(event.target.value);

    // Check if the answer is correct
    if (selectedAnswer === quiz[currentDifficulty][currentIndex].answer) {
        score++;
        document.getElementById("score-value").innerHTML = score;

    }

    // Go to the next question or end the quiz
    currentIndex++;

    if (currentIndex < quiz[currentDifficulty].length) {
        remaining--;
        showQuestion();

    } else {
        endQuiz();
    }
}

let timer = 0;
let interval;
let resultsMessage = document.getElementById("results-message")


function endQuiz() {

     const resultsMenuButton = document.getElementById('ResultsMenu-button');
     resultsMenuButton.addEventListener('click', function () {
      
            window.location.reload();
      
          
});
    // Show the final score and a message based on the score 
    document.getElementById("title-results").style.display = "block";
    resultsMessage.style.display = "block";
    quizResults.style.display = "flex";
    document.getElementById("results-username").innerHTML = username.value;
    document.getElementById("results-score").innerHTML = `Score: ${score}/${quiz[currentDifficulty].length}`

    if (score < (quiz[currentDifficulty].length) / 2) {
        resultsMessage.innerHTML = "Hard Luck!  Please Try Again";
    } else {
        resultsMessage.innerHTML = "Well Done!  You Passed";
    }
    document.getElementById("reset-button").style.display = "none";
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("menu-button").style.display = "block";
    quizQuestions.innerHTML = "";
    quizAnswers.innerHTML = "";
    stopTimer();
    document.getElementById("results-time").innerHTML = "Total time: " + timer + " seconds";

}

function resetQuiz() {
    score = 0;
    quizQuestions.innerHTML = "";
    quizAnswers.innerHTML = "";
    document.getElementById("score-value").innerHTML = score;
    remaining = quiz[currentDifficulty].length;
    currentIndex = 0;
    showQuestion();
}

function startTimer() {
    interval = setInterval(function () {
        timer++;
        document.getElementById("timer").innerHTML = timer;
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}