var numArray = [30, 32, 40, 55, 60, 80, 90];


var result  = numArray.filter(function (item) { 
      return item > 50;
});

document.write(result); // [55, 60, 80, 90]