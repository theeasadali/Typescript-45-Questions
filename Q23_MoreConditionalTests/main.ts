let personName = "Asad Ali";
let lowerCaseName = "asad ali"
console.log(personName == lowerCaseName)

// test with lowercase function
console.log(personName == personName.toLowerCase())

// numerical test
console.log(3 == 3)
console.log(3 > 5);
console.log(2 < 5);
console.log(2 >= 2);
console.log(5 <= 5)
console.log(5 && 4);
console.log(1 || 6);

console.log(personName.split(" ").includes("Asad"));
console.log("Noonari" in personName.split(" "));