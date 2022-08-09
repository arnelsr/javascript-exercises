const reverseString = function(string) {
    //split string
    const stringArray = string.split(' ');
    //get number of elements?
    //loop thru all elements
    let reversedWord ='';
    let reversedWordArray = [];
    let reversedStringsArray=[]
    let word='';
    for (let k=stringArray.length-1;k>-1;k--){
      //get element from last to first
      word=stringArray[k];
   
      //reverse each element
        let j=0;
        for (let i=word.length-1;i>-1;i--){
            reversedWordArray[j] =word.charAt(i);
            j++;

        }
        //convert reversedWordArray to string
        reversedWord=reversedWordArray.join('');
        //add to reverseWordArray
        reversedStringsArray.push(reversedWord);
      
    }
    //join each element with space between
    //return
    let reversedStrings='';
    reversedStrings=reversedStringsArray.join(' ');
    return reversedStrings;
};

// Do not edit below this line
module.exports = reverseString;
