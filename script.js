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

const quizContainer = document.querySelector("#quiz-container");

function startQuiz(event) {

    let difficulty = event.target.value;

    const username = document.querySelector("#username").value;
    if (username === "") {
        alert("Please enter your username");
        return;
    }

    document.getElementById("quiz-form").style.display = "none";
    document.querySelector("#score").style.display = "inline";
    document.querySelector("#remaining").style.display = "inline";
    showQuestion();
}