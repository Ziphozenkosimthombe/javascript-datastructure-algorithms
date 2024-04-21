/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

//====using es6 method for of=====
function vowelsCounter(text){
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of text){
        if (vowels.includes(char.toLowerCase())){
            count++
        }
    }
    return count
}

let vowelsCounter = text => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return [...text].reduce((count, char) => vowels.includes(char.toLowerCase()) ? count + 1 : count, 0)
}

let  vowelsCounter = text =>{
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return [...text].filter(char => vowels.includes(char.toLowerCase())).length
}

//======regular expression method======
function vowelsCounter(text){
    // Search text with Regex and store all matching instances
    const matches = text.match(/[aeiou]/gi);
    // Check if matching instances exist then calculate length
    if (matches){
        // Return the total number of vowels
        return matches.length
    }else{
        return 0
    }
}

module.exports = vowelsCounter;
