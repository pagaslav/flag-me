// Importing the array of flag data from the flags-data.js file
import flagsDataArray from './flags-data.js';

// Variables
let currentIndex = Math.floor(Math.random() * 99); // Index of the current flag
const prevArrow = document.getElementById('learnArrowsPrev');
const nextArrow = document.getElementById('learnArrowsNext');

// Function to display flag information based on index
function showFlag(index) {
    let flagData = flagsDataArray[index];
    let flagImage = document.getElementById("flagImageLearn");
    flagImage.src = flagData.image;
    flagImage.alt = "Flag of " + flagData.country;
    document.getElementById("flagImageLearn").src = flagsDataArray[index].image;
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