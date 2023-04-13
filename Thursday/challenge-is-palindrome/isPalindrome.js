// Write your code below
function palindromeCheck(word) {
    for(let i = 0; i < word.length; i++) {
        let j = word.length - 1 - i;
        if(i === j && word[i] === word[j]) break;
        else if(word[i] === word[j]) break;
        else return console.log(`"${word}" is not a palindrome.`);
        
    }
    return console.log(`"${word}" is a true palindrome.`);
}
console.log(`Checking via two for loops.\n`);

palindromeCheck(`rotator`);
palindromeCheck(`Noon`);
palindromeCheck(`Hannah`);
palindromeCheck(`peep`);

console.log(`\nNow to check via regex pattern.\n`);

function palindromeVerify(str)
{
  let evalStr = str.replace(/[^A-Za-z0-9]/g, ' ');
  for (let i = 0; i < evalStr.length/2; i++)
  {
    if(evalStr[i] !== evalStr[evalStr.length - 1 - i])
    {
      return console.log(`"${str}" is not a palindrome.`);
    }
  }
  return console.log(`"${str}" is a true palindrome.`);
}

palindromeVerify(`Kayak`);
palindromeVerify(`Radar`);
palindromeVerify(`deified`);
palindromeVerify(`detartrated`);


console.log(`\nAnd, lastly, we check via methods.\n`);
function palindromeAgain(phrase) {
    if(phrase.split('').reverse().join(``) === phrase) return console.log(`"${phrase}" is a true palindrome.`);
    else return console.log(`"${phrase}" is not a palindrome.`);
}

palindromeAgain(`step on no pets`);
palindromeAgain(`yo banana boy`);
palindromeAgain(`noel sees leon`);
palindromeAgain(`he lived as a devil eh`);