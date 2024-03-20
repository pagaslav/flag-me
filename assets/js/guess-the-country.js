// Importing the array of flag data from the flags-data.js file
import flagsDataArray from './flags-data.js';

// Filtered arrays by difficulty
let easyFlags = flagsDataArray.filter(flag => flag.difficulty === "Easy");
let mediumFlags = flagsDataArray.filter(flag => flag.difficulty === "Medium");
let hardFlags = flagsDataArray.filter(flag => flag.difficulty === "Hard");