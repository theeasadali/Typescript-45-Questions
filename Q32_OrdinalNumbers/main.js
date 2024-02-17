var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 1; i <= numbers.length; i++) {
    if (i === 1) {
        console.log("1st");
    }
    else if (i === 2) {
        console.log("2nd");
    }
    else if (i === 3) {
        console.log("3rd");
    }
    else {
        console.log(i + "th");
    }
}
