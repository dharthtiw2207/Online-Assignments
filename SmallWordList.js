const fs = require('fs');

function isCompoundWord(word, wordSet) {
    if (wordSet.has(word)) {
        return true;
    }
    for (let i = 1; i < word.length; i++) {
        let prefix = word.slice(0, i);
        let suffix = word.slice(i);
        if (wordSet.has(prefix) && isCompoundWord(suffix, wordSet)) {
            return true;
        }
    }
    return false;
}

function findLongestCompoundWords(fileName) {
    const startTime = Date.now();
    
    const words = fs.readFileSync(fileName, 'utf-8')
        .trim()
        .split('\n')
        .map(line => line.trim());

    const wordSet = new Set(words);
    let longestWord = "";
    let secondLongestWord = "";

    for (let word of words) {
        wordSet.delete(word);
        if (isCompoundWord(word, wordSet)) {
            if (word.length > longestWord.length) {
                secondLongestWord = longestWord;
                longestWord = word;
            } else if (word.length > secondLongestWord.length) {
                secondLongestWord = word;
            }
        }
        wordSet.add(word);
    }

    const endTime = Date.now();
    const processingTime = endTime - startTime;

    console.log(`Longest Compound Word: ${longestWord}`);
    console.log(`Second Longest Compound Word: ${secondLongestWord}`);
    console.log(`Time taken to process file: ${processingTime} milliseconds`);
}

// Example usage
findLongestCompoundWords('Input_01.txt');
