const ftoc = function(temp) {
convertedTemp = Number((((temp - 32) * 5) / 9))
convertedTemp = Math.round(convertedTemp * 10) / 10
return convertedTemp;
};

const ctof = function(temp) {
convertedTemp = Number((temp * (9 / 5)) + 32)
console.log(convertedTemp)
convertedTemp = Math.round(convertedTemp * 10) / 10
return convertedTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
