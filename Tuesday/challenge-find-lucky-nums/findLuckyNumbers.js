// Write your code below this line.

function randomUnique(num) {
    let temp = [];
    let randomNum = 0;
    for (let i = 1; i <= num; i++){
        randomNum = Math.floor(Math.random() * 10) + 1;
        while (temp.includes(randomNum)) randomNum = Math.floor(Math.random() * 10) + 1;
        temp.push(randomNum);
    }
    return temp;
}
console.log(randomUnique(10));