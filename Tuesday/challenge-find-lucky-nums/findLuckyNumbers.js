// Write your code below this line.

function randomUnique(num) {
    let temp = [];
    let include = [0];
    let randomNum = 0;
    for (let i = 0; i < num; i++){
        randomNum = Math.floor(Math.random() * 11);
        while (include.includes(randomNum)) randomNum = Math.floor(Math.random() * 11);
        include.push(randomNum);
        temp.push(randomNum);
    }
    return temp;
}
console.log(randomUnique(10));