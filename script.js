const quiz = {
    easy: [{
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
       showQuestion();
}