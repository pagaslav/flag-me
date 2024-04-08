// Importing the array of flag data from the flags-data.js file
import flagsDataArray from './flags-data.js';

// Function to get a random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {

        // Generating a random index j within the range [0, i]
        const j = Math.floor(Math.random() * (i + 1));

        // Swapping elements in the array to shuffle it
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}