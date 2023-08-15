// () => {}

/* const answerOne = "lorem ipsum"
const answerTwo = "This is answer two"
const answerThree = "lorem ipsum three"

const returnCount = (ans1, ans2, ans3) => {
   return ans1.length + ans2.length + ans3.length
}

let count1 = returnCount(answerOne, answerTwo, answerThree);

console.log(count1); */


/*     const answerOne = "lorem ipsum"
    const answerTwo = "This is answer two"
    const answerThree = "lorem ipsum three"

    const returnCount = (ans1, ans2, ans3) => {
        return ans1.length + ans2.length + ans3.length
    }

    let count1 = returnCount(answerOne, answerTwo, answerThree);
    let count2 = returnCount("hello", "im", "Chase");

    console.log(count1);
    console.log(count2);

 */

/* const isDivisible = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        return true
    } else {
        return false
    }
}
 
let groupOneSize = 125;

let groupOneIsGood = isDivisible(125);
 
console.log(groupOneIsGood); */


const findLongestWord = (sentence) => {
    if (sentence == '' || typeof sentence !== "string") {
        return
    }

    let arrayOfStrings = sentence.split(' ');
    let currentLongest = ''
    for (let i=0; i<arrayOfStrings.length; i++) {
        if (arrayOfStrings[i].length > currentLongest.length) {
            currentLongest = arrayOfStrings[i]
        } 
    }
    return currentLongest;
}

let longestWord = findLongestWord("What words are longest here?");

console.log(longestWord);