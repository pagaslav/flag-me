// Importing the array of flag data from the flags-data.js file
import flagsDataArray from './flags-data.js';

// Function to get a random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}