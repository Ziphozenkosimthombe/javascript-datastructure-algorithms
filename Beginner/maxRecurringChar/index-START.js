/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {
    // Code goes here
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        let tempCount = 0;
        for (let k = 0; k < text.length; k++){
            if (text[i] === text[k]){
                tempCount++
            }
        }
        if (tempCount > count){
            count = tempCount;
            var char = text[i]
        }
    }
    return char; 
}

function maxRecurringChar(text){
    let count = 0;
    return [...text].reduce((acc, char) => {
        if (text.split(char).length > count){
            count = text.split(char).length;
            return char;
        } else {
            return acc;
        }
    }, '')
}




module.exports = maxRecurringChar;