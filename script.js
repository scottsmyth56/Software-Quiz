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
            choices: ["In the <body> section", "In the <head> section", "At the end of the document", "In a <header> section"],
            answer: 2
        },
        {
            prompt: "Which HTML tag is used to define an internal style sheet?",
            choices: ["<style>", "<css>", "<link>", "<script>"],
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
    medium: [
        {
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
    hard: [
        {
            prompt: "Which of the following is not an OOPS concept in Java?",
            choices: [
                "Polymorphism",
                "Inheritance",
                "Compilation",
                "Encapsulation"],
            answer: 2
        },
        {
            prompt: "What is Truncation in Java?",
            choices: [
                "Floating-point value assigned to a Floating type",
                "Floating-point value assigned to an integer type",
                "Integer value assigned to floating type",
                "Integer value assigned to floating type"],
            answer: 1
        },
        {
            prompt: "Which was the first purely object oriented programming language developed?",
            choices: [
                "Kotlin",
                "SmallTalk",
                "Java",
                "C++"],
            answer: 1
        },
        {
            prompt: "Which of the following is a feature of DBMS?",
            choices: [
                "Minimum Duplication and Redundancy of Data",
                "High Level of Security",
                "Single-user Access only",
                "Support ACID Property"],
            answer: 2
        },
        {
            prompt: "What is information about data called?",
            choices: [
                "Hyper data",
                "Tera data",
                "Meta data",
                "Relations"],
            answer: 2
        },
        {
            prompt: "Agile Software Development is based on which of the following type?",
            choices: [
                "Iterative Development",
                "Incremental Development",
                "Both Incremental and Iterative Development",
                "Linear Development"],
            answer: 2
        },
        {
            prompt: "In multilevel inheritance, which is the most significant feature of OOP used?",
            choices: [
                "Code efficiency",
                "Code readability",
                "Flexibility",
                "Code reusability"],
            answer: 3
        },
        {
            prompt: "What happens when an object is passed by reference?",
            choices: [
                "Destructor is called at end of function",
                "Destructor is called when called explicitly",
                "Destructor is not called",
                "Destructor is called when function is out of scope"],
            answer: 2
        },
       

    ]
};


const difficultyButtons = document.querySelectorAll(".difficulty-btn");
difficultyButtons.forEach(button => {
    button.addEventListener("click", startQuiz);
});

let score = 0;
let remaining = 0;
let currentQuestion = 0;
let difficulty = "";
const quizContainer = document.querySelector("#quiz-container");

function startQuiz(event) {

    let difficulty = event.target.value;

    const username = document.querySelector("#username").value;
    if (username === "") {
        alert("Please enter your username");
        return;
    }


    document.getElementById("quiz-form").style.display = "none";
    document.querySelector("#score").style.display = "block";
    document.querySelector("#remaining").style.display = "block";
    document.querySelector("#user-div").style.display = "block";
    document.getElementById("names").innerHTML = username;


    score = 0;
    remaining = quiz[difficulty].length;
    currentQuestion = 0;
    updateScore();
    updateRemaining();
    showQuestion();
}

function showQuestion() {
    // Get the current question
    const question = quiz[difficulty][currentQuestion];
    // Update the quiz container
    const quizContainer = document.querySelector("#quiz-container");
    quizContainer.innerHTML = "";
    // Add the question prompt
    const prompt = document.createElement("p");
    prompt.textContent = question.prompt;
    quizContainer.appendChild(prompt);
    // Add the choices
    const choices = document.createElement("div");
    choices.id = "choices";
    quizContainer.appendChild(choices);
    for (let i = 0; i < question.choices.length; i++) {
        const choice = document.createElement("button");
        choice.textContent = question.choices[i];
        choice.addEventListener("click", function () {
            // Check if the answer is correct
            if (question.answer === i) {
                // Increase the score and update the score element
                score++;
                updateScore();
            }
            // Go to the next question
            currentQuestion++;
            // If there are no more questions, end the quiz
            if (currentQuestion === quiz[difficulty].length) {
                endQuiz();
            } else {
                // Otherwise, show the next question
                showQuestion();
            }
        });
        choices.appendChild(choice);
    }
}

function endQuiz() {
    // Show the final score and a message
    const quizContainer = document.querySelector("#quiz-container");
    quizContainer.innerHTML = "";
    const message = document.createElement("p");
    message.textContent = `Congratulations, you finished the quiz with a score of ${score}/${quiz[difficulty].length}!`;
    quizContainer.appendChild(message);
}

function updateScore() {
    document.querySelector("#score-value").textContent = score;
}

function updateRemaining() {
    remaining--;
    document.querySelector("#remaining-value").textContent = remaining;
}