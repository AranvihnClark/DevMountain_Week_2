// Write your code below
function palindromeCheck(word) {
    for(let i = 0; i < word.length; i++) {
        for(let j = (word.length - 1) - i; j >= i; j++) {
            if(i === j && word[i] === word[j]) break;
            else if(word[i] === word[j]) break;
            else return console.log(`"${word}" is not a palindrome.`);
        }
    }
    return console.log(`"${word}" is a true palindrome.`)
}

palindromeCheck(`rotator`);
palindromeCheck(`Noon`);
palindromeCheck(`peep`);
palindromeCheck(`yo banana boy`);
palindromeCheck(`Kayak`);
palindromeCheck(`step on no pets`);