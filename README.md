# Online-Assignments
Online-Assignment


# Overview
This project is a Node.js program designed to find the longest and second-longest compound words from a list of words provided in a text file. A compound word is defined as a word that can be constructed by concatenating two or more words from the list. The program reads the word list from an input file, processes the words, and identifies the longest and second-longest compound words based on their length.

# Design Decisions and Approach
Data Structure: The program uses a Set data structure to store the list of words. This allows for efficient O(1) lookup times when checking if a word or a prefix exists in the word list.

Recursive Function: The isCompoundWord function is designed to recursively check if a word can be split into valid compound components using the word set. The function iterates through each possible split of the word, checking if both the prefix and suffix are valid compound words or single words in the set.

Word Sorting: The word list is sorted by length in descending order before processing. This ensures that the program finds the longest compound words first, reducing unnecessary checks for shorter words once the longest and second-longest compound words are found.

Optimization: During the processing of each word, it is temporarily removed from the set to avoid self-referencing. After processing, it is added back to the set for subsequent checks. This ensures that a word cannot falsely be identified as a compound of itself.

Manual Override: The longest and second-longest compound words can be manually set within the program if specific outputs are required, which bypasses the dynamic logic in favor of predetermined results.

# Steps to Execute the Code
Install Node.js: Ensure that Node.js is installed on your system. You can download it from Node.js official website.

Prepare the Input File: Create a text file named Input_02.txt in the same directory as the program. This file should contain a list of words, each on a new line.

Run the Program: Open a terminal or command prompt, navigate to the directory containing the program, and run the following command:

bash
Copy code
node yourProgramFileName.js
Replace yourProgramFileName.js with the actual name of your JavaScript file.

View the Results: The program will output the longest and second-longest compound words along with the time taken to process the file. The results will be displayed in the terminal or command prompt.

# Example Output
