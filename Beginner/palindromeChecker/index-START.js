/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
   let reverseWords = text.toLoweCase().split('').reverse().join('');
   if(text === reverseWords){
       return true;
   }else{return false;}
}

function palindromeChecker(text){
    return text === text.toLoweCase().split('').reverse().join('');
}

module.exports = palindromeChecker;