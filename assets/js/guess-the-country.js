// Importing the array of flag data
import flagsDataArray from './flags-data.js';

let gameType = "guessCountry"; // Set based on the page type

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
            options: [flag.country]
        };

        while (question.options.length < 4) {
            const randomFlag = getRandomElement(flagsDataArray);
            if (!question.options.includes(randomFlag.country)) {
                question.options.push(randomFlag.country);
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
    document.querySelector('.question-number').textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
    document.getElementById('guessCountryImage').src = currentQuestion.image;

    const optionsContainer = document.getElementById('optionsCountryContainer');
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-button');
        button.onclick = () => handleAnswer(option);
        optionsContainer.appendChild(button);
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
        window.location.href = "result.html?gameType=" + gameType;
    }
}

function playAgain(event) {
    event.preventDefault(); // Stop the link from triggering its default behavior
    if (confirm("Are you sure you want to play again?")) {
        window.location.href = gameType === "guessCountry" ? "guess-the-country.html" : "guess-the-flag.html";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    displayQuestion();

    // Attaching the event listener directly to the Play Again link
    const playAgainLink = document.querySelector('a[onclick="playAgain()"]');
    playAgainLink.onclick = playAgain; // Assign the playAgain function directly to the onclick event

    // Universal link handler, modified to ignore the Play Again link
    document.querySelectorAll('a:not([onclick="playAgain()"])').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            if (confirm("Are you sure you want to leave this page?")) {
                window.location.href = this.getAttribute('href');
            }
        });
    });
});