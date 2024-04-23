/* CHALLENGE
Given a sentence, return the longest word in the string. E.g

longestWord('Top Shelf Web Development Training on Scotch') 
//should return 'Development'
*/



function longestWord(text) {
    // Code goes here
    let longestWord = text.split(' ')
    longestWord.forEach((word) => {
        if (word.length > longestWord.length) {
            longestWord = word
        }
    })
    return longestWord
}

function longestWord(text){
    let name = text.split(' ').sort((a,b) => b.length - a.length)
    return name[0]

}


module.exports = longestWord