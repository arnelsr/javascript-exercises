const palindromes = function (string) {
    
    //convert to array, lowercase
    const stringArray = Array.from(string.toLowerCase());
    //filter a to z
    const allLetters = stringArray.filter((char)=> {
        return (/[a-zA-Z]/).test(char);
    });
    //reverse
    let reverse=[];
    
    let i = allLetters.length - 1;
    allLetters.forEach(letter =>{
        reverse[i]=letter;
        i--;
        
    });

    //join orig array without spaces or punctuation
    const originalString = allLetters.join('');
    //join reverse array
    const reverseString=reverse.join('');

    //if orig and reverse equal return true
    if (originalString === reverseString) {
        return true;
    }
    return false;

};

// Do not edit below this line
module.exports = palindromes;
