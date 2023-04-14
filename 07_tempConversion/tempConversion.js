const convertToCelsius = function(Fahreinheit){


  let toCelsius = (5/9) * (Fahreinheit - 32)

  fixCelsius = toCelsius.toFixed(1);

  return +fixCelsius;

};

const convertToFahrenheit = function(Celsius) {

  let toFahrenheit = (Celsius * 1.8)+32

  let fixFahrenheit = toFahrenheit.toFixed(1);

  return +fixFahrenheit;

};

// Do not edit below this line
  module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
