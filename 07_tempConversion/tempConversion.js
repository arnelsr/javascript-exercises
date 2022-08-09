const ftoc = function(fahrenheit) {
  let celsius =0;
  celsius = Math.round((fahrenheit-32)*(5/9)*10)/10;
  return celsius;


};

const ctof = function(celsius) {
  let fahrenheit =0;
  fahrenheit = (Math.round(celsius *(9/5)*10)/10)+32;
  return fahrenheit;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
