// Starting array
let array = [-2,1,1,0,0,-1];//[28, 43, -12, 30, 4, 0, 12]
let isTrue = false;
// Write your solution below:
for (let i = 0; i < array.length; i++){
    // j = i+1 becuase we don't need j to check any of the older values because they would have already been calcuated at that time.
    for (let j = i + 1; j < array.length; j++){
        // Only doing this to be able to show the correlation between the math and answer.
        let calculation = array[i] + array[j];
        if (calculation === 0) isTrue = true; 
        console.log(`${array[i]} + ${array[j]} = ${calculation} // ${isTrue}.`);
        // After this, we should just break the loop as the question only asked to check if there was a value that equaled 0. So once we find a comparison that is equaled to 0, we can stop. But we will just return the boolean back to false so that we can run the rest of the loop to prove that the code works.
        isTrue = false;
    }
}