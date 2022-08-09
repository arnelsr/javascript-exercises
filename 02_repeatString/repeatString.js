const repeatString = function(string,num) {
    let outputString = '';
    if (num <0 ) {
        outputString = 'ERROR';
        return outputString;
    }
    for (let i=0;i<num;i++){
        outputString=outputString+string;

    }
    return outputString;

};

// Do not edit below this line
module.exports = repeatString;
