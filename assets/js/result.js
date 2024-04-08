// Retrieve results from localStorage
const resultsArray = JSON.parse(localStorage.getItem('resultsArray'));

// Calculate the total number of correct answers
let totalCorrectAnswers = 0;
for (let i = 0; i < resultsArray.length; i++) {
    totalCorrectAnswers += resultsArray[i];
}

// Get the total number of questions
const totalQuestions = resultsArray.length;

// Create a string to display the results
const scoreMessage = 'Your score: ' + totalCorrectAnswers + ' out of ' + totalQuestions;

// Find the element to display the result and set the text
const scoreElement = document.getElementById('score');
scoreElement.textContent = scoreMessage;