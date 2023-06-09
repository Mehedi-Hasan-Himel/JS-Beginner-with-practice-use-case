// JavaScript if else Statement

// The JavaScript if else statement is used to execute the code whether conditional is true of false.
// 1. if statement
// 2. if else statement
// 3. if else if statement

/* var age = 11;
var city = "Gazipur";
if (age >= 18 && city == "Gazipur") {
  // console.log("You are adult.");
    document.write(`Your Adult`);

} else {
  //  console.log(`Your child`);
  document.write(`Your Child`);
} */


var Marks =55;
if (Marks >= 80 && Marks <= 100) {
  document.write(`A+`)
} else if (Marks < 80 && Marks >= 70) {
  document.write(`A`)
} else if (Marks < 70 && Marks >= 60) {
  document.write(`A-`)
} else if (Marks < 60 && Marks >= 50) {
  document.write(`B`)
}
else if (Marks < 50 && Marks >= 40) {
  document.write(`C`)
} else if (Marks < 40 && Marks >= 33) {   
  document.write(`D`)
}
else {
  document.write(`Fail`)
}
