const leapYears = function(year) {
    let returnBoolean = true;
    let remainder1 = 0;
    let remainder2=0;
    remainder1 = year%4
    if (remainder1 !== 0) {
       returnBoolean = false;
       return returnBoolean;
    }
    remainder1 = year%100;
    remainder2 = year%400;
    if ((remainder1===0) &&
        (remainder2 !==0)){
        returnBoolean=false;
        return returnBoolean;
    }
    return returnBoolean;
};

// Do not edit below this line
module.exports = leapYears;
