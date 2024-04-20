/* jshint esversion: 11 */

/**
 * Array containing quotes
 */
const quotes = [{
        text: "A thoughtful mind, when it sees a nation's flag, sees not the flag, but the nation itself.",
        author: "<a href='https://en.wikipedia.org/wiki/Henry_Ward_Beecher' target='_blank'>Henry Ward Beecher</a>"
    },
    {
        text: "A man may climb Everest for himself, but at the summit he plants his country's flag.",
        author: "<a href='https://en.wikipedia.org/wiki/Margaret_Thatcher' target='_blank'>Margaret Thatcher</a>"
    },
    {
        text: "The flag is the embodiment, not of sentiment, but of history.",
        author: "<a href='https://en.wikipedia.org/wiki/Woodrow_Wilson' target='_blank'>Woodrow Wilson</a>"
    },
    {
        text: "To survive in peace and harmony, united and strong, we must have one people, one nation, one flag.",
        author: "<a href='https://en.wikipedia.org/wiki/Pauline_Hanson' target='_blank'>Pauline Hanson</a>"
    },
    {
        text: "I believe our flag is more than just cloth and ink. It is a universally recognized symbol that stands for liberty, and freedom. It is the history of our nation, and it's marked by the blood of those who died defending it.",
        author: "<a href='https://en.wikipedia.org/wiki/John_Thune' target='_blank'>John Thune</a>"
    },
    {
        text: "We have but one flag, one country; let us stand together. We may differ in color, but not in sentiment.",
        author: "<a href='https://en.wikipedia.org/wiki/Nathan_Bedford_Forrest' target='_blank'>Nathan Bedford Forrest</a>"
    },
    {
        text: "I don't wave a flag for anything. I'm a musician.",
        author: "<a href='https://en.wikipedia.org/wiki/Keith_Richards' target='_blank'>Keith Richards</a>"
    },
    {
        text: "Our flag is not just one of many political points of view. Rather, the flag is a symbol of our national unity.",
        author: "<a href='https://en.wikipedia.org/wiki/Adrian_Cronauer' target='_blank'>Adrian Cronauer</a>"
    },
    {
        text: "Our flag is a proud flag, and it stands for liberty and civilization. Where it has once floated, there must be no return to tyranny.",
        author: "<a href='https://en.wikipedia.org/wiki/Theodore_Roosevelt' target='_blank'>Theodore Roosevelt</a>"
    },
    {
        text: "Nationalism is just racism with a flag.",
        author: "<a href='https://en.wikipedia.org/wiki/Peter_Joseph' target='_blank'>Peter Joseph</a>"
    },
    {
        text: "If that's what you're thinking, then don't even question it. Go let your freak flag fly, brother.",
        author: "<a href='https://en.wikipedia.org/wiki/Anthony_Kiedis' target='_blank'>Anthony Kiedis</a>"
    },
    {
        text: "Patriotism consists not in waving the flag, but in striving that our country shall be righteous as well as strong.",
        author: "<a href='https://en.wikipedia.org/wiki/James_Bryce,_1st_Viscount_Bryce' target='_blank'>James Bryce</a>"
    },
    {
        text: "The flag is a symbol of the fact that man is still a herd animal.",
        author: "<a href='https://en.wikipedia.org/wiki/Albert_Einstein' target='_blank'>Albert Einstein</a>"
    },
    {
        text: "If I fall, pick up the flag, kiss it, and keep on going.",
        author: "<a href='https://en.wikipedia.org/wiki/Omar_Torrijos' target='_blank'>Omar Torrijos</a>"
    },
    {
        text: "I am not the flag: not at all. I am but its shadow.",
        author: "<a href='https://en.wikipedia.org/wiki/Franklin_Knight_Lane' target='_blank'>Franklin Knight Lane</a>"
    },
    {
        text: "There is no flag large enough to cover the shame of killing innocent people.",
        author: "<a href='https://en.wikipedia.org/wiki/Howard_Zinn' target='_blank'>Howard Zinn</a>"
    },
    {
        text: "Don't waive your rights with your flags.",
        author: "<a href='https://en.wikipedia.org/wiki/Sage_Francis' target='_blank'>Sage Francis</a>"
    },
    {
        text: "As Conservatives, We Don't Care About The Color of Your Skin, We Care About The Color of Our Flag",
        author: "<a href='https://en.wikipedia.org/wiki/Allen_West_(politician)' target='_blank'>Allen West</a>"
    },
    {
        text: "Raising the flag and singing the anthem are, while somewhat suspicious, not in themselves acts of treason.",
        author: "<a href='https://en.wikipedia.org/wiki/Terry_Pratchett' target='_blank'>Terry Pratchett</a>"
    },
    {
        text: "A flag once raised will never fall!",
        author: "<a href='https://en.wikipedia.org/wiki/Mahammad_Amin_Rasulzade' target='_blank'>Mehmet Emin Resulzade</a>"
    },
    {
        text: "There is no flag on Earth that is more beautiful than the flag with only the picture of the Earth on it!",
        author: "<a href='https://de.wikipedia.org/wiki/Mehmet_Murat_%C4%B0ldan' target='_blank'>Mehmet Murat ildan</a>"
    },
    {
        text: "Money doesn’t carry a flag.",
        author: "<a href='https://jeffarch.com/' target='_blank'>Jeff Arch</a>"
    }
];

/**
 * Function to get a random quote
 */
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

/**
 * Function to display a random quote on the page
 */
function displayRandomQuote() {
    const randomQuote = getRandomQuote();
    const quoteElement = document.getElementById("randomQuote");
    // Use template literals to format the quote and author dynamically
    quoteElement.innerHTML = `<em>"${randomQuote.text}"</em> - ${randomQuote.author}`;
}

/**
 * Function to increase the font size of the quote element.
 */
function increaseFontSize() {
    const quoteElement = document.getElementById("randomQuote");
    const currentFontSize = window.getComputedStyle(quoteElement).fontSize;
    const currentFontSizeValue = parseFloat(currentFontSize);
    quoteElement.style.fontSize = (currentFontSizeValue + 2) + 'px';
}

/**
 * Function to decrease the font size of the quote element.
 */
function decreaseFontSize() {
    const quoteElement = document.getElementById("randomQuote");
    const currentFontSize = window.getComputedStyle(quoteElement).fontSize;
    const currentFontSizeValue = parseFloat(currentFontSize);
    quoteElement.style.fontSize = (currentFontSizeValue - 2) + 'px';
}

/**
 * Event listener for refreshing the quote
 */
document.getElementById('refreshQuote').addEventListener('click', displayRandomQuote);

/**
 * Event listener for when the DOM content is loaded
 */
document.addEventListener("DOMContentLoaded", function () {
    // Call the function to display a random quote when the page loads
    displayRandomQuote();

    // Event listeners for font size adjustment icons
    document.querySelector('.fa-plus-circle').addEventListener('click', increaseFontSize);
    document.querySelector('.fa-minus-circle').addEventListener('click', decreaseFontSize);
});

// Get the modal
const modal = document.getElementById('instructionsModal');

// Get the button that opens the modal
const btn = document.querySelector('.btn-instructions');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};