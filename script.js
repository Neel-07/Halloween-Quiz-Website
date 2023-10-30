const questions = [
    {
        question: "What is the traditional Halloween activity of carving faces into a pumpkin?",
        options: ["Pumpkin Picking", "Pumpkin Carving", "Pumpkin Painting", "Pumpkin Tossing"],
        correct: "Pumpkin Carving"
    },
    {
        question: "What is the name of the spirit that is said to wander the earth on Halloween night?",
        options: ["Casper", "The Headless Horseman", "Jack-o'-Lantern", "Banshee"],
        correct: "The Headless Horseman"
    },
    {
        question: "What do you say to ask for candy on Halloween night?",
        options: ["Please", "Trick or Treat", "Give me candy", "Happy Halloween"],
        correct: "Trick or Treat"
    }
];

const questionElement = document.getElementById('question');
const optionsElements = document.querySelectorAll('.option');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restartButton');

let currentQuestion = 0;
let score = 0;
let quizCompleted = false;

function loadQuestion() {
    if (currentQuestion < questions.length) {
        const current = questions[currentQuestion];
        questionElement.textContent = current.question;
        optionsElements.forEach((option, index) => {
            option.textContent = current.options[index];
            option.addEventListener('click', checkAnswer);
        });
    } else {
        resultElement.textContent = 'Quiz Completed! 🎉';
        restartButton.style.display = 'block';
        quizCompleted = true;
    }
}

function checkAnswer(event) {
    if (quizCompleted) return;

    const selectedOption = event.target.textContent;
    const correctOption = questions[currentQuestion].correct;

    if (selectedOption === correctOption) {
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

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    updateScore();
    resultElement.textContent = '';
    restartButton.style.display = 'none';
    quizCompleted = false;
    loadQuestion();
}

loadQuestion();
updateScore();
