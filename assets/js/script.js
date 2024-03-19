import flagsDataArray from './flags-data.js';

let currentIndex = Math.floor(Math.random() * 99); // Index of the current flag

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

// Get references to the previous and next buttons
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');

// Add event listeners to the buttons
prevButton.addEventListener('click', showPreviousFlag);
nextButton.addEventListener('click', showNextFlag);

// Show the first flag when the page loads
showFlag(currentIndex);
console.log(flagsDataArray.length);