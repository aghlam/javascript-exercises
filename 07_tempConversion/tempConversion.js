const ftoc = function(temp) {

  const celcius = (temp-32)*5/9;

  const rounded = Math.round(celcius*10) / 10;

  return rounded;

};

const ctof = function(temp) {

  const faren = temp *9/5 + 32;
  
  const rounded = Math.round(faren *10) / 10;

  return rounded;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
