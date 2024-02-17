const personName: string = "asda ala fdidf";
const titleCase = (sentence : string) => {
    return sentence.toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

console.log(personName.toLowerCase())
console.log(personName.toUpperCase())
console.log(titleCase(personName))