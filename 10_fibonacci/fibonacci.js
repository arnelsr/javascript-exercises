const fibonacci = function(numberString) {
    //convert argument to number
    let number = +numberString;
   

    //no negatives
    if ((number <= 0) || isNaN(number)){
        return 'OOPS';
    }
   //return first 2 members
    if (number === 1 || number === 2){
        return 1;
    }


    let fibonacciMember = 0;
    let fibonacciArray = [1,1];

    for (let i=1; i<=number;i++) {
        if (i>2) {
            fibonacciMember = fibonacciArray[fibonacciArray.length-1] + fibonacciArray[fibonacciArray.length-2];
            fibonacciArray.push(fibonacciMember);

        }
        
    }
    return fibonacciMember;

    //calculate nth member

};

// Do not edit below this line
module.exports = fibonacci;
