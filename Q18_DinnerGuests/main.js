// old guest list
var guestList = ["Sajjad Gachal", "Maqbool Ali Panhwar", "Abdur Rehman Ali Brohi", "Anwar Ali Noonari"];
// Guest not coming
console.log("Sir ".concat(guestList[guestList.length - 1], ", Unforunately will not be able to make it for dinner.\n"));
// Replacing the guest not coming with the alternate guest
guestList.splice(guestList.length - 1, 1, "Muhammad Idrees");
// Guest at the beginning
guestList.unshift("Asghar Ali");
// Guest in the middle
guestList.splice(3, 0, "Muhammad Ali");
// Guest in the end
guestList.push("Muhammad Saleh");
// TOTAL Number of PEOPLE COMING
console.log("Almost ".concat(guestList.length, " people have been invited for the dinner tonight."));
