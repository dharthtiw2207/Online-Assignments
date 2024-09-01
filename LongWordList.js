const fs = require('fs');

// Function to read the word list from file and return an array of words
function readWordList(fileName) {
    return fs.readFileSync(fileName, 'utf-8').split('\n').map(word => word.trim()).filter(Boolean);
}

// Function to check if a word is a compound word using a set of words
function isCompoundWord(word, wordSet) {
    if (wordSet.has(word)) return true;

    for (let i = 1; i < word.length; i++) {
        let prefix = word.slice(0, i);
        let suffix = word.slice(i);

        if (wordSet.has(prefix) && isCompoundWord(suffix, wordSet)) {
            return true;
        }
    }
    return false;
}

// Main function to find the longest and second longest compound words
function findLongestCompoundWords(wordList) {
    const wordSet = new Set(wordList);
    let longestWord = '';
    let secondLongestWord = '';

    wordList.sort((a, b) => b.length - a.length); // Sort by length descending

    for (let word of wordList) {
        wordSet.delete(word); // Remove the word from the set to prevent using itself

        if (isCompoundWord(word, wordSet)) {
            if (!longestWord) {
                longestWord = word;
            } else if (!secondLongestWord) {
                secondLongestWord = word;
                break;
            }
        }

        wordSet.add(word); // Add the word back to the set
    }

    return { longestWord, secondLongestWord };
}

// Main execution
const startTime = new Date().getTime();
const wordList = readWordList('Input_02.txt');
const { longestWord, secondLongestWord } = findLongestCompoundWords(wordList);
const endTime = new Date().getTime();

console.log(`Longest Compound Word: ${longestWord}`);
console.log(`Second Longest Compound Word: ${secondLongestWord}`);
console.log(`Time taken to process file Input_02.txt: ${endTime - startTime} milliseconds`);
