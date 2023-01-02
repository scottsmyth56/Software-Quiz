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
            answer: 2
        },
        {
            prompt: "Java can run on any computer platform that has a ...?",
            choices: ["Java compiler", "Java Virtual Machine", "Linux OS", "Intel Pentium"],
            answer: 1
        },
        {
            prompt: "Which HTML tag hyperlinks text?",
            choices: ["DIV", "A", "IFRAME", "BR"],
            answer: 2
        },
        {
            prompt: "Which of the following shows the construction of an object?",
            choices: [
                "ConsoleWindow c = new ConsoleWindow();",
                "int sum = 0;",
                "final int STOP = -999;",
                "int value = c.input.readint();"
            ],
            answer: 2
        }
    ],
    medium: [{
            prompt: "",
            choices: [""],
            answer: 0
        },
        {
            prompt: "",
            choices: [""],
            answer: 0
        },
        {
            prompt: "",
            choices: [""],
            answer: 0
        }
    ],
    hard: [{
            prompt: "",
            choices: [""],
            answer: 0
        },
        {
            prompt: "",
            choices: [""],
            answer: 0
        },
        {
            prompt: "",
            choices: [""],
            answer: 0
        }

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