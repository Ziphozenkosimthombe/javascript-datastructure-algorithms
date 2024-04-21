/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

//======= chaining method ========
function reverseString(text) {
    const textReversed = text.split('').reverse().join('')
    return textReversed
}


//======= chaining method using ES6 ========
function reverseString(text) {
    return [...text].reverse().join('')
}

//=============for loop method using ES6 ================
function reverseString(text) {
    let result = ''
    for (let char of text) {
        result = char + result
    }
    return result
}

//=======for loop method ========
function reverseString(text) {
    let result = ''
    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i]
    }
    return result
}
//======= reduce method is the fastest way to reverse a string ========
function reverseString(text) {
    return text.split('').reduce((acc, char) => char + acc, '')
    // return [...text].reduce((acc, char) => char + acc, '')
}



module.exports = reverseString