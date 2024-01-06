const questions = [
    {
        question: "What is the traditional Halloween activity of carving faces into a pumpkin?",
        options: ["Pumpkin Picking", "Pumpkin Carving", "Pumpkin Painting", "Pumpkin Tossing"],
        correct: "Pumpkin Carving"
    },
    {
        question: "Which animal is often associated with witches?",
        options: ["Rabbit", "Cat", "Dog", "Bird"],
        correct: "Cat"
    },
    {
        question: "What do people traditionally bob for at Halloween parties?",
        options: ["Apples", "Oranges", "Pears", "Grapes"],
        correct: "Apples"
    },
    // Add more questions as needed
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElements = Array.from(document.querySelectorAll('.option'));
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restartButton');

restartButton.addEventListener('click', startQuiz);

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestion < questions.length) {
        const current = questions[currentQuestion];
        questionElement.textContent = current.question;
        optionsElements.forEach((option, index) => {
            option.textContent = current.options[index];
            option.onclick = () => checkAnswer(index);
        });
    } else {
        endQuiz();
    }
}

function checkAnswer(index) {
    const correctIndex = questions[currentQuestion].options.indexOf(questions[currentQuestion].correct);
    if (index === correctIndex) {
        resultElement.textContent = 'Correct! 🎃';
        score++;
    } else {
        resultElement.textContent = 'Incorrect. Try again! 👻';
    }
    currentQuestion++;
    updateScore();
    loadQuestion();
}

function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
}

function endQuiz() {
    resultElement.textContent = `Quiz ended. Your score is ${score}.`;
    if (localStorage.getItem('highScore') < score) {
        localStorage.setItem('highScore', score);
    }
}

startQuiz();
