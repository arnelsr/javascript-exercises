const add = function(...args) {
  const sum = args.reduce(function(total,number){
   return total + number;
    

  },0);
  return sum;
};

const subtract = function(...args) {
  const difference = args.reduce(function(total,number){
    return total - number;
  

	});
  return difference;
};

const sum = function(array) {
  const sum = array.reduce(function(total,number){
    return total + number;
     
 
   },0);
   return sum;
	
};

const multiply = function(array) {
  let product =1;
  for (const number of array) {
    product *= number;
  }
  return product;
};

const power = function(number1, number2) {
  const powerResult=number1**number2;
  return powerResult;
	
};

const factorial = function(number) {
  let result = 1;
  if (number === 0 || number === 1) {
    return result;
  }
  if (number < 0) {
    result = -1;
    return result;
  }
  for(let i=number;i>0;i--){
    result *=i;
  }
	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
