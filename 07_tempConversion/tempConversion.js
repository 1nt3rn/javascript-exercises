const roundOneDecimal = (num) => {
  return Math.round(num * 10) / 10;
};

const convertToCelsius = function(degrees) {
    return roundOneDecimal((degrees-32) * (5 / 9));
};

const convertToFahrenheit = function(degrees) {
    return roundOneDecimal(degrees * 9 / 5 + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
