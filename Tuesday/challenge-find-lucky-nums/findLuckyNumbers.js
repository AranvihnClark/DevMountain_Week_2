// Write your code below this line.

function randomUnique(num) {
    let temp = [];
    for (let i = 0; i <= num; i++){
        let randomNum = Math.floor(Math.random() * 10) + 1;
        while (temp.includes(randomNum)) randomNum = Math.floor(Math.random() * 10) + 1;
        temp.push(randomNum);
    }
    return temp;
}
console.log(randomUnique(10));