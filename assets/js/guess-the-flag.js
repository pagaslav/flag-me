// Importing the array of flag data
import flagsDataArray from './flags-data.js';

let gameType = "guessFlag"; // Set based on the page type

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

function generateQuestionsArray(flagsDataArray, totalQuestions) {
    let questionsArray = [];
    shuffleArray(flagsDataArray);

    for (let i = 0; i < totalQuestions; i++) {
        const flag = flagsDataArray[i];
        const question = {
            image: flag.image,
            correctAnswer: flag.country,
            options: []
        };

        while (question.options.length < 4) {
            const randomFlag = getRandomElement(flagsDataArray);
            if (!question.options.some(option => option.country === randomFlag.country)) {
                question.options.push(randomFlag);
            }
        }
        shuffleArray(question.options);
        questionsArray.push(question);
    }
    return questionsArray;
}

const totalQuestions = 12;
let questionsArray = generateQuestionsArray(flagsDataArray, totalQuestions);
let currentQuestionIndex = 0;
let resultsArray = [];

function displayQuestion() {
    const currentQuestion = questionsArray[currentQuestionIndex];
    const questionNumberElement = document.querySelector('.question-number');
    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;

    const optionsContainer = document.getElementById('optionsFlagContainer');
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const img = document.createElement('img');
        img.src = option.image;
        img.alt = `Flag of ${option.country}`;
        img.classList.add('flagImage-guess-flag');
        img.addEventListener('click', () => handleAnswer(option.country));
        optionsContainer.appendChild(img);
    });
}

function handleAnswer(option) {
    const correctAnswer = questionsArray[currentQuestionIndex].correctAnswer;
    const isCorrect = option === correctAnswer ? 1 : 0;
    resultsArray.push(isCorrect);

    localStorage.setItem('resultsArray', JSON.stringify(resultsArray));

    if (++currentQuestionIndex < totalQuestions) {
        displayQuestion();
    } else {
        window.location.href = "result.html?gameType=guessFlag";
    }
}

function playAgain() {
    if (confirm("Are you sure you want to start the game again?")) {
        window.location.href = gameType === "guessFlag" ? "guess-the-flag.html" : "guess-the-country.html";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    displayQuestion();
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            if (link.getAttribute('onclick') === 'playAgain()') {
                playAgain();
            } else if (confirm("Are you sure you want to navigate away from this page?")) {
                window.location.href = this.getAttribute('href');
            }
        });
    });
});