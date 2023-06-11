/* var numArray = [30, 32, 40, 55, 60, 80, 90];

var result = numArray.find(function (value) {
  return value < 35;
});

document.write(result); // 55 */

var numArray = [30, 32, 40, 55, 60, 80, 90];

var result = numArray.findIndex(function (value) {
  return value < 35;
});

document.write(result); // 55
