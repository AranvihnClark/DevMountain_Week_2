// Write your code below

function hasUniqueChars(word) {
    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length; j++) {
            if (word[i] === word[j]) return false;
        }
    }
    return true;
}

console.log(hasUniqueChars("Hydrogen"));
console.log(hasUniqueChars("river"));
console.log(hasUniqueChars("Final Show"));
console.log(hasUniqueChars("I hope it's false..."));