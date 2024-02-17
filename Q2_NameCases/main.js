var personName = "asda ala fdidf";
var titleCase = function (sentence) {
    return sentence.toLowerCase()
        .split(" ")
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
        .join(" ");
};
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(titleCase(personName));
