const questions = [
    {
        question: "What is the traditional Halloween activity of carving faces into a pumpkin?",
        options: ["Pumpkin Picking", "Pumpkin Carving", "Pumpkin Painting", "Pumpkin Tossing"],
        correct: "Pumpkin Carving"
    },
    // ...
];

const questionElement = document.getElementById('question');
const optionsElements = Array.from(document.querySelectorAll('.option'));
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restartButton');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestion < questions.length) {
        const current = questions[currentQuestion];
        questionElement.textContent = current.question;
        optionsElements.forEach((option, index) => {
            option.textContent = current.options[index];
            option.style.display = 'block';
            option.onclick = checkAnswer;
        });
    } else {
        endQuiz();
    }
}

function checkAnswer(event) {
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

function endQuiz() {
    resultElement.textContent = 'Quiz Completed! 🎉';
    questionElement.textContent = `Your Score: ${score}`;
    questionElement.classList.add('flash');
    optionsElements.forEach((option) => {
        option.style.display = 'none';
    });
    restartButton.style.display = 'block';
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    updateScore();
    resultElement.textContent = '';
    questionElement.textContent = '';
    questionElement.classList.remove('flash');
    loadQuestion();
}

loadQuestion(); // Start the quiz immediately
