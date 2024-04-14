// Importing the array of flag data from the flags-data.js file
import flagsDataArray from './flags-data.js';

// Function to get a random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// Generating an array of objects with the specified number of questions
function generateQuestionsArray(flagsDataArray, totalQuestions) {
    let questionsArray = [];

    // Shuffling flags array
    shuffleArray(flagsDataArray);

    // Adding questions to the array in the desired order
    for (let i = 0; i < totalQuestions; i++) {
        const flag = flagsDataArray[i];
        const question = {
            image: flag.image,
            correctAnswer: flag.country,
            options: []
        };

        // Adding correct answer to options
        question.options.push(flag.country);

        // Generating incorrect options
        while (question.options.length < 4) {
            const randomFlag = getRandomElement(flagsDataArray);
            if (!question.options.includes(randomFlag.country)) {
                question.options.push(randomFlag.country);
            }
        }

        // Shuffling options
        shuffleArray(question.options);

        // Adding question to questionsArray
        questionsArray.push(question);
    }

    return questionsArray;
}

// Total number of questions
const totalQuestions = 12;

// Creating an array of questions
let questionsArray = generateQuestionsArray(flagsDataArray, totalQuestions);

// Getting a reference to the container for answer options
const optionsContainer = document.getElementById('optionsCountryContainer');

// Array to store results
let resultsArray = [];

// Function to display the question and answer options
function displayQuestion() {
    // Getting the current question
    const currentQuestion = questionsArray[currentQuestionIndex];

    // Displaying the question number
    const questionNumberElement = document.querySelector('.question-number');
    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;

    // Displaying the flag image
    const flagImage = document.getElementById('guessCountryImage');
    flagImage.src = currentQuestion.image;

    // Clearing the container with answer options
    optionsContainer.innerHTML = '';

    // Creating and adding buttons with answer options
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-button');
        button.addEventListener('click', () => handleAnswer(option));
        optionsContainer.appendChild(button);
    });
}

// Function to handle user's answer
function handleAnswer(option) {
    // Getting the correct answer for the current question
    const correctAnswer = questionsArray[currentQuestionIndex].correctAnswer;

    // Checking if the chosen answer is correct
    const isCorrect = option === correctAnswer ? 1 : 0;

    // Adding the answer result to the results array
    resultsArray.push(isCorrect);

    // Saving results array to localStorage
    localStorage.setItem('resultsArray', JSON.stringify(resultsArray));

    // Moving to the next question
    currentQuestionIndex++;

    // Checking if there are more questions
    if (currentQuestionIndex < totalQuestions) {
        // Displaying the next question
        displayQuestion();
    } else {
        // If all questions are answered, redirecting to the results page
        window.location.href = "result.html?gameType=guessCountry";
    }
}

// Variable to track the current question
let currentQuestionIndex = 0;

// Displaying the first question when the page loads
displayQuestion();