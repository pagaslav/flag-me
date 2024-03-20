// Importing the array of flag data from the flags-data.js file
import flagsDataArray from './flags-data.js';

// Variables
let currentIndex = Math.floor(Math.random() * 99); // Index of the current flag
const prevArrow = document.getElementById('learnArrowsPrev');
const nextArrow = document.getElementById('learnArrowsNext');

// Function to display flag information based on index
function showFlag(index) {
    let flagData = flagsDataArray[index];
    let flagImage = document.getElementById("flagImage");
    flagImage.src = flagData.image;
    flagImage.alt = "Flag of " + flagData.country;
    document.getElementById("flagImage").src = flagsDataArray[index].image;
    document.getElementById("country").innerText = flagData.country;
    document.getElementById("description").innerText = flagData.description;
}

// Function to display the next flag
function showNextFlag() {
    // Increment index and loop back to beginning if needed
    currentIndex = (currentIndex + 1) % flagsDataArray.length;
    showFlag(currentIndex);
}

// Function to display the previous flag
function showPreviousFlag() {
    // Decrement index and loop back to end if needed
    currentIndex = (currentIndex - 1 + flagsDataArray.length) % flagsDataArray.length;
    showFlag(currentIndex);
}

prevArrow.addEventListener('click', showPreviousFlag);
nextArrow.addEventListener('click', showNextFlag);

// Show the first flag when the page loads
showFlag(currentIndex);



// Other code for the guess-the-country.html page

// Initialize a counter variable
let easyCount = 0;

// Iterate through the array
flagsDataArray.forEach(flag => {
    // Check if the difficulty property of the current flag is "easy"
    if (flag.difficulty === "Easy") {
        // If it is, increment the counter
        easyCount++;
    }
});

// Now easyCount contains the number of objects with difficulty set to "easy"
console.log("Number of flags with difficulty 'easy':", easyCount);