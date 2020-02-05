// array for prices on one year
var oneYearPrice = [];

for (var i = 1; i <= 12; i++) {
  var firstRandom = getRandomArbitrary(1000000, 2000000)
  firstRandom = Math.floor(firstRandom)
  oneYearPrice.push(firstRandom)
}
//console.log('oneYearPrice:', oneYearPrice)

var fiveYearPrice = [];

for (var i = 1; i <= 60; i++) {
  var randomNum = getRandomArbitrary(1000000, 3000000);
  randomNum = Math.floor(randomNum);
  fiveYearPrice.push(randomNum);
}
// console.log('fiveYearPrice:', fiveYearPrice)


// helper function to get number between min and max
function getRandomArbitrary (min, max) {
  return Math.random() * (max - min) + min;
}

// data that is being exported to database save function
var data = {
  oneYearPrice: oneYearPrice,
  fiveYearPrice: fiveYearPrice
};


module.exports = data;
