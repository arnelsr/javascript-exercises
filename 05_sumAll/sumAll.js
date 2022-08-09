const sumAll = function(integer1, integer2) {
   //declare error constant
   const error = 'ERROR';
   if ((integer1.isNAN) || (integer2.isNAN)) {
    return error;
   }
   if ((integer1<0)||(integer2<0)) {
    return error;
   }
   if((typeof integer1!=='number') ||
      (typeof integer2!=='number')) {
        return error;
      }


  //decare sum variable to be returned
  let sum =0;
  //add from first integer up to max iteration
  //max iteration is distance between integers + 2
  let minInteger = 0;
  minInteger = integer1;
  if (integer2<integer1) {
    minInteger=integer2;
  }
  let max=Math.abs(integer1-integer2)+1;
  for (let i=0;i<max;i++){
      sum+=minInteger;
      minInteger++;
  }
  //return sum
  return sum;
}

// Do not edit below this line
module.exports = sumAll;
