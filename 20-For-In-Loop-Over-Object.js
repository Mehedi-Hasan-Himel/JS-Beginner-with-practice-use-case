var Person = {
  name: "Ali",
  age: 20,
  city: "Tehran",
  height: 180,
};

for (var item in Person) {
  document.write(item + ": " + Person[item] + "<br>");
}
