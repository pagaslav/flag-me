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

// Now, questionsArray contains 12 objects with question data.

// Getting a reference to the container for answer options
const optionsContainer = document.getElementById('optionsContainer');

// Array to store results
let resultsArray = [];