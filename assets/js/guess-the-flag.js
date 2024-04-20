/* jshint esversion: 11 */

// Importing the array of flag data
import flagsDataArray from './flags-data.js';

let gameType = "guessFlag"; // Set based on the page type

/**
 * Function to get a random element from an array.
 * 
 * @param {Array} array - The array from which to select a random element.
 * @returns {*} - A randomly selected element from the array.
 */
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/**
 * Function to shuffle the elements of an array in place.
 * 
 * @param {Array} array - The array to be shuffled.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

/**
 * Function to generate an array of questions for a quiz.
 * 
 * @param {Array} flagsDataArray - An array containing data for flags.
 * @param {number} totalQuestions - The total number of questions to generate.
 * @returns {Array} - An array of question objects for the quiz.
 */
function generateQuestionsArray(flagsDataArray, totalQuestions) {
    let questionsArray = [];
    shuffleArray(flagsDataArray);

    for (let i = 0; i < totalQuestions; i++) {
        const correctFlag = flagsDataArray[i];
        const question = {
            image: correctFlag.image,
            correctAnswer: correctFlag.country,
            options: [correctFlag] // Start with the correct flag
        };

        // Ensure four unique flags including the correct one
        while (question.options.length < 4) {
            const randomFlag = getRandomElement(flagsDataArray);
            if (!question.options.some(option => option.country === randomFlag.country)) {
                question.options.push(randomFlag);
            }
        }

        // Shuffle the options to randomize their positions
        shuffleArray(question.options);
        questionsArray.push(question);
    }
    return questionsArray;
}

const totalQuestions = 12;
let questionsArray = generateQuestionsArray(flagsDataArray, totalQuestions);
let currentQuestionIndex = 0;
let resultsArray = [];

/**
 * Function to display the current question in the quiz.
 */
function displayQuestion() {
    const currentQuestion = questionsArray[currentQuestionIndex];
    document.querySelector('.question-number').textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
    document.getElementById('country-name').textContent = currentQuestion.correctAnswer; // Display the name of the country

    const optionsContainer = document.getElementById('options-flag-container');
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const img = document.createElement('img');
        img.src = option.image;
        img.alt = `Flag of ${option.country}`;
        img.classList.add('flag-image-guess-flag');
        img.addEventListener('click', () => handleAnswer(option.country));
        optionsContainer.appendChild(img);
    });
}

/**
 * Function to handle the user's answer to the current question.
 * 
 * @param {string} option - The option selected by the user.
 */
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

/**
 * Function to initiate playing the game again.
 */
function playAgain() {
    if (confirm("Are you sure you want to start the game again?")) {
        window.location.href = gameType === "guessFlag" ? "guess-the-flag.html" : "guess-the-country.html";
    }
}

/**
 * Event listener for when the DOM content is loaded.
 */
document.addEventListener("DOMContentLoaded", function () {
    displayQuestion();
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            if (link.getAttribute('onclick') === 'playAgain()') {
                playAgain();
            } else if (confirm("Are you sure you want to leave this page?")) {
                window.location.href = this.getAttribute('href');
            }
        });
    });
});