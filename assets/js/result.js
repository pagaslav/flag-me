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
const scoreMessage = `Your score: ${totalCorrectAnswers} out of ${totalQuestions}. Bazinga!`;

// Find the element to display the result and set the text
const scoreElement = document.getElementById('score');
scoreElement.textContent = scoreMessage;

// Function to add images and result text based on the total correct answers
function addImagesAndText(totalCorrectAnswers) {
    const imageContainer = document.getElementById('imageContainerResult');
    const resultTextContainer = document.getElementById('resultText');

    // Add image and text based on the total correct answers
    if (totalCorrectAnswers < 4) {
        // Less than 4 correct answers
        imageContainer.innerHTML = '<img src="assets/images/sheldon-1.jpg" alt="Image 1">';
        resultTextContainer.innerHTML = `
            <p>Oh dear, it seems your flag knowledge is as elusive as the Higgs boson - always hinted at but never quite captured. Maybe your flags are in a state of quantum superposition, both right and wrong at the same time.</p>
            <p>Keep exploring the flagiverse and remember, even Einstein had his off days!</p>
        `;
    } else if (totalCorrectAnswers >= 4 && totalCorrectAnswers < 8) {
        // 4-7 correct answers
        imageContainer.innerHTML = '<img src="assets/images/sheldon-2.jpg" alt="Image 2">';
        resultTextContainer.innerHTML = `
            <p>Well, well, well. It appears your flag expertise is fluctuating like particles in a collider, sometimes hitting the mark and sometimes missing by a wide margin. Keep exploring the flagiverse, maybe you'll stumble upon the grand unifying flag theory.</p>
            <p>Remember, Newton's apple fell more than once before it inspired his theories!</p>
        `;
    } else if (totalCorrectAnswers >= 8 && totalCorrectAnswers < 12) {
        // 8-11 correct answers
        imageContainer.innerHTML = '<img src="assets/images/sheldon-3.jpg" alt="Image 3">';
        resultTextContainer.innerHTML = `
            <p>Ah, fascinating! Your flag knowledge is reaching a level of stability akin to the laws of thermodynamics. But beware, don't let your confidence collapse like a wave function under observation - uncertainty is the name of the game in the flagosphere.</p>
            <p>Keep the momentum going, but remember, even the best scientists have room to grow!</p>
        `;
    } else if (totalCorrectAnswers === 12) {
        // 12 correct answers
        imageContainer.innerHTML = '<img src="assets/images/sheldon-4.jpg" alt="Image 4">';
        resultTextContainer.innerHTML = `
            <p>Unbelievable! Your flag mastery is as impressive as the expansion of the universe itself. Your knowledge density rivals that of a neutron star, compact yet infinitely vast. It seems you've unlocked the secrets of the flagverse, the Sheldon Cooper of flags!</p>
            <p>But remember, with great knowledge comes great responsibility. Keep exploring and stay humble!</p>
        `;
    }
}

// Call the function to add images and result text
addImagesAndText(totalCorrectAnswers);